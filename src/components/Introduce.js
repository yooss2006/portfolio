import React from "react";
const Introduce = () => {
  return (
    <section className="Introduce">
      <h2 className="blind">자기소개</h2>
      <div className="imgWrapper"></div>
      <section className="descWrapper">
        <blockquote>
          <p>완벽한 잔디밭을 만드는 비결은</p>
          <p>
            매일 아침 이슬을 털어주고 이틀에 한 번 잔디를 깎아주며 <br />{" "}
            일주일에 한번 잔디밭을 골라주는 것이다.
          </p>
          <p> 별거 아닌 이 비결의 핵심은 500년간의 꾸준한 노력이다.</p>
          <cite>이튼 칼리지의 잔디밭 이야기</cite>
        </blockquote>
        <div className="descTitle">
          <h3>안녕하세요. 프론트엔드 개발자 유순상입니다.</h3>
          <p>
            상단의 문구는 제가 가장 좋아하는 문구로 가슴속에 품고 살아가고
            있습니다.
          </p>
          <p>
            디자이너와 프로그래머 사이에서 고민해 멀티미디어 공학과에 진학하게
            되었고 졸업까지 무사히 마쳤습니다.
          </p>
          <p>
            전공 수업 중에 웹 프로그래밍 수업을 처음 접했고 디자인과
            프로그래밍을 둘 다 할 수 있는 웹 개발에 빠지게 되었습니다.
          </p>
          <p>
            공부한 내용을 정리하는 것을 잘해 만점인 4.5학점을 맞아본 적이
            있습니다. 졸업 학점은 3.99로 마쳤습니다.
          </p>
          <p>공부한 내용 친구들에게 나누며 같이 성장하는 것을 좋아합니다.</p>
          <p>
            매일 커밋을 잊지 않으며 제 장점인 성실함으로 업무에 임하겠습니다.
          </p>
        </div>
      </section>
    </section>
  );
};

export default Introduce;
