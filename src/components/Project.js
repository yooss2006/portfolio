import React, { useState } from "react";
import { projectMap as map, projectList } from "../util/project";
import arrow from "../assets/arrow.png";
import styled from "styled-components";

const ProjectSlide = styled.section`
  height: ${(props) => props.floor * 100}%;
  transform: translate(
    ${(props) => (props.xLocation ? props.xLocation * -50 + "%" : "0")},
    ${(props) =>
      props.yLocation ? props.yLocation * -(100 / props.floor) + "%" : "0"}
  );
`;

const ProjectItem = styled.div`
  background: url(${(props) => props.img}) no-repeat top center/cover;
`;

const Project = () => {
  const [projectMap, setProjectMap] = useState(map(projectList.length));
  const [curPoint, setCurPoint] = useState([0, 0]);

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

  const handleMove = (location) => {
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

  return (
    <section className="Project container">
      <h2>프로젝트</h2>
      <div className="buttonWrapper">
        <div className="projectWrapper">
          <ProjectSlide
            className="projectSlide"
            xLocation={curPoint[1]}
            yLocation={curPoint[0]}
            floor={projectMap.length}
          >
            <h3 className="blind">프로젝트 슬라이드</h3>
            {projectList.map((item) => {
              return (
                <article className="projectItem" key={item.name}>
                  <h4>{item.name}</h4>
                  <div className="flexWrapper">
                    <dl className="oneLine">
                      <dt>참여 인원</dt>
                      <dd>{item.participants} 명</dd>
                    </dl>
                    <p className="simpleDesc">{item.simple_desc}</p>
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
                  <ProjectItem className="screen" img={item.img}></ProjectItem>
                </article>
              );
            })}
          </ProjectSlide>
        </div>
        <button
          className={["projectBtn", "top", arrowCheck()[0] ? "" : "hide"].join(
            " "
          )}
          onClick={() => handleMove("상")}
        >
          <img src={arrow} alt="위쪽 화살표" />
        </button>
        <button
          className={[
            "projectBtn",
            "bottom",
            arrowCheck()[1] ? "" : "hide",
          ].join(" ")}
          onClick={() => handleMove("하")}
        >
          <img src={arrow} alt="아래쪽 화살표" />
        </button>
        <button
          className={["projectBtn", "left", arrowCheck()[2] ? "" : "hide"].join(
            " "
          )}
          onClick={() => handleMove("좌")}
        >
          <img src={arrow} alt="왼쪽 화살표" />
        </button>
        <button
          className={[
            "projectBtn",
            "right",
            arrowCheck()[3] ? "" : "hide",
          ].join(" ")}
          onClick={() => handleMove("우")}
        >
          <img src={arrow} alt="오른쪽 화살표" />
        </button>
      </div>
    </section>
  );
};

export default React.memo(Project);
