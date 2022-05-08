import React from "react";
const Introduce = () => {
  return (
    <section className="Introduce container">
      <h2 className="blind">자기소개</h2>
      <div className="imgWrapper"></div>
      <section className="descWrapper">
        <blockquote>
          <p>완벽한 잔디밭을 만드는 비결은</p>
          <p>
            매일 아침 이슬을 털어주고 이틀에 한 번 잔디를 깎아주며 <br />
            일주일에 한 번 잔디밭을 골라주는 것이다.
          </p>
          <p> 별거 아닌 이 비결의 핵심은 500년간의 꾸준한 노력이다.</p>
          <cite>이튼 칼리지의 잔디밭 이야기</cite>
        </blockquote>
        <div className="descTitle">
          <h3>안녕하세요. 프론트엔드 개발자 유순상입니다.</h3>
          <p>
            그림그리는 것을 좋아하고 프로그래밍에도 관심이 있어 두 가지를 접할
            수 있는 멀티미디어 공학과에 진학하게 되었고 졸업까지 무사히
            마쳤습니다.
          </p>
          <p>
            전공 수업 중에 웹 프로그래밍 수업을 처음 접했고 디자인과
            프로그래밍을 둘 다 할 수 있는 웹 개발의 매력에 빠지게 되었습니다.
          </p>
          <p>
            저는 공부한 내용을 체계적으로 정리하는 것을 잘해 만점인 4.5학점을
            맞아본 적이 있습니다. 졸업 학점은 3.99로 마쳤습니다.
          </p>
          <p>
            저는 공부한 내용을 나누고 같이 성장하는 것을 좋아합니다. 퍼블리싱
            스터디에서 배운 내용을 팀프로젝트 조원들에게 화면공유를 하며
            알려줬고 이는 프로젝트의 완성도를 높이는 결과로 돌아왔습니다.
          </p>
          <p>
            저는 약속을 목숨처럼 여깁니다. 자신과의 약속인 1일 1커밋을 지키기
            위해 노력하며 4년동안 아르바이트를 하며 한번의 지각도 없었습니다.
          </p>
        </div>
      </section>
    </section>
  );
};

export default Introduce;
