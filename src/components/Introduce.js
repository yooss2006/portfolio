import React from "react";
const Introduce = () => {
  return (
    <section className="Introduce container">
      <h2 className="blind">자기소개</h2>
      <section className="introWapper">
        <div className="imgWrapper"></div>
        <div className="descTitle">
          <h3>안녕하세요. 프론트엔드 개발자 유순상입니다.</h3>
          <p>
            그림을 그리는 것을 좋아하고 프로그래밍에도 관심이 있어 두 가지를
            접할 수 있는 멀티미디어 공학과에 진학하게 되었고 졸업까지 무사히
            마쳤습니다.
          </p>
          <p>
            전공 수업 중에 웹 프로그래밍 수업에서 처음 웹 개발을 접했습니다.
            이때 디자인과 프로그래밍을 둘 다 할 수 있는 웹 개발의 매력에 빠지게
            되었습니다.
          </p>
          <ul>
            <li>
              <p>저는 공부한 내용을 체계적으로 정리하는 것을 잘합니다.</p>{" "}
              <p>
                대학교 3학년 때 만점인 4.5학점을 맞아본 적이 있습니다. 졸업
                학점은 3.99로 마쳤습니다. 개발에서도 정리한 내용을 찾아 응용할
                수 있습니다.
              </p>
            </li>
            <li>
              <p>저는 공부한 내용을 나누고 같이 성장하는 것을 좋아합니다.</p>
              <p>
                퍼블리싱 스터디에서 배운 내용을 팀 프로젝트 조원들에게 공유했고
                이는 프로젝트의 완성도를 높이는 결과로 돌아왔습니다.
              </p>
            </li>
            <li>
              <p>저는 대인관계에서 신뢰가 가장 중요하다고 생각합니다.</p>
              <p>
                신뢰를 가장 쉽게 깨뜨리는 것은 약속을 어기는 일입니다. 자신과의
                약속인 1일 1커밋을 지키기 위해 노력하며 4년 동안 아르바이트를
                하며 한 번의 지각도 없었습니다.
              </p>
            </li>
            <li>
              <p>
                저는 개발자로서 새로운 기술을 배우고 응용하는 과정에서
                두근거림을 느낍니다.
              </p>
              <p> 좋아하는 일에 최선을 다해 최고의 성과를 내겠습니다.</p>
            </li>
          </ul>
        </div>
      </section>
      <section className="wiseWapper">
        <blockquote>
          <p>완벽한 잔디밭을 만드는 비결은</p>
          <p>
            매일 아침 이슬을 털어주고 이틀에 한 번 잔디를 깎아주며 <br />
            일주일에 한 번 잔디밭을 골라주는 것이다.
          </p>
          <p>
            별거 아닌 이 비결의 핵심은 <strong>500년간의 꾸준한 노력</strong>
            이다.
          </p>
          <cite>이튼 칼리지의 잔디밭 이야기</cite>
        </blockquote>
        <div></div>
      </section>
    </section>
  );
};

export default Introduce;
