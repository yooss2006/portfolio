import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { projectMap as map, projectList } from "../util/project";

import arrow from "../assets/arrow.png";
import { AiFillGithub } from "react-icons/ai";
import { MdWebAsset } from "react-icons/md";

const ProjectSlide = styled.section`
  height: ${(props) => props.floor * 100}%;
  transform: translate(
    ${(props) => (props.xLocation ? props.xLocation * -50 + "%" : "0")},
    ${(props) =>
      props.yLocation ? props.yLocation * -(100 / props.floor) + "%" : "0"}
  );
`;

const ProjectBg = styled.div`
  background-color: ${(props) => props.color};
`;

const Project = () => {
  const [projectMap, setProjectMap] = useState(map(projectList.length));
  const [curPoint, setCurPoint] = useState([0, 0]);
  const project = useRef(null);

  useEffect(() => {
    if (project.current !== null) project.current.focus();
  }, [curPoint]);

  const arrowCheck = () => {
    let curArrawMap = [0, 0, 0, 0];
    //상
    if (curPoint[0] !== 0) curArrawMap[0] = 1;
    //하
    if (curPoint[0] !== projectMap.length - 1) {
      curArrawMap[1] = 1;
      if (projectList.length % 2 !== 0 && curPoint[1] === 1) curArrawMap[1] = 0;
    }
    //좌
    if (curPoint[1] !== 0) curArrawMap[2] = 1;
    //우
    if (curPoint[1] !== 1) {
      curArrawMap[3] = 1;
      if (
        projectList.length % 2 !== 0 &&
        curPoint[0] === projectMap.length - 1
      ) {
        curArrawMap[3] = 0;
      }
    }
    //결과는 [상, 하, 좌, 우]의 형태이며 1이면 이동이 가능하고, 0이면 이동이 불가능하다.
    return curArrawMap;
  };

  const handleClickMove = (location) => {
    switch (location) {
      case "상":
        setCurPoint([curPoint[0] - 1, curPoint[1]]);
        break;
      case "하":
        setCurPoint([curPoint[0] + 1, curPoint[1]]);
        break;
      case "좌":
        setCurPoint([curPoint[0], curPoint[1] - 1]);
        break;
      default:
        setCurPoint([curPoint[0], curPoint[1] + 1]);
        break;
    }
  };

  function handleKeyboardPress(e) {
    const location = arrowCheck();
    if ((e.keycode === 38 || e.key === "ArrowUp") && location[0]) {
      //상
      setCurPoint([curPoint[0] - 1, curPoint[1]]);
    } else if ((e.keycode === 40 || e.key === "ArrowDown") && location[1]) {
      //하
      setCurPoint([curPoint[0] + 1, curPoint[1]]);
    } else if ((e.keycode === 37 || e.key === "ArrowLeft") && location[2]) {
      //좌
      setCurPoint([curPoint[0], curPoint[1] - 1]);
    } else if ((e.keycode === 39 || e.key === "ArrowRight") && location[3]) {
      //우
      setCurPoint([curPoint[0], curPoint[1] + 1]);
    }
  }

  return (
    <section className="Project container">
      <h2>프로젝트</h2>
      <p className="explanation">
        아래 프로젝트를 클릭 후 키보드의 화살표로 움직여보세요.
      </p>
      <div className="buttonWrapper">
        <div className="projectWrapper">
          <ProjectSlide
            className="projectSlide"
            xLocation={curPoint[1]}
            yLocation={curPoint[0]}
            floor={projectMap.length}
            onKeyUp={handleKeyboardPress}
            ref={project}
            tabIndex={0}
          >
            <h3 className="blind">프로젝트 슬라이드</h3>

            {projectList.map((item) => {
              return (
                <article className="projectItem" key={item.name}>
                  <header>
                    <h4>{item.name}</h4>
                    <ul>
                      <li>
                        <a href={item.gitLink} target="_blank">
                          <AiFillGithub />
                        </a>
                      </li>
                      <li>
                        <a href={item.distributeLink} target="_blank">
                          <MdWebAsset />
                        </a>
                      </li>
                    </ul>
                  </header>

                  <div className="flexWrapper">
                    <p className="simpleDesc">{item.simple_desc}</p>
                    <dl className="oneLine">
                      <dt>참여 인원</dt>
                      <dd>{item.participants} 명</dd>
                    </dl>
                    <dl className="oneLine">
                      <dt>기술 스택</dt>
                      <dd>
                        <ul className="skillStack">
                          {item.skill.map((item, index) => {
                            return <li key={index}>{item}</li>;
                          })}
                        </ul>
                      </dd>
                    </dl>
                    <dl className="multiLine">
                      <dt>구현 내용</dt>
                      <dd>
                        <ul>
                          {item.desc.map((item, index) => {
                            return <li key={index}>{item}</li>;
                          })}
                        </ul>
                      </dd>
                    </dl>
                  </div>
                </article>
              );
            })}
          </ProjectSlide>
        </div>
        <button
          className={["projectBtn", "top", arrowCheck()[0] ? "" : "hide"].join(
            " "
          )}
          onClick={() => handleClickMove("상")}
        >
          <img src={arrow} alt="위쪽 화살표" />
        </button>
        <button
          className={[
            "projectBtn",
            "bottom",
            arrowCheck()[1] ? "" : "hide",
          ].join(" ")}
          onClick={() => handleClickMove("하")}
        >
          <img src={arrow} alt="아래쪽 화살표" />
        </button>
        <button
          className={["projectBtn", "left", arrowCheck()[2] ? "" : "hide"].join(
            " "
          )}
          onClick={() => handleClickMove("좌")}
        >
          <img src={arrow} alt="왼쪽 화살표" />
        </button>
        <button
          className={[
            "projectBtn",
            "right",
            arrowCheck()[3] ? "" : "hide",
          ].join(" ")}
          onClick={() => handleClickMove("우")}
        >
          <img src={arrow} alt="오른쪽 화살표" />
        </button>
      </div>
      <p className="notionLink">
        <a
          href="https://supreme-balance-5ba.notion.site/49e5cc208e604ac781b0539ee24343ed"
          target="_blank"
        >
          자세한 내용은 여기를 눌러주세요.
        </a>
      </p>

      <ProjectBg
        className="bg"
        color={projectList[curPoint[0] * 2 + curPoint[1]].color}
      ></ProjectBg>
    </section>
  );
};

export default React.memo(Project);
