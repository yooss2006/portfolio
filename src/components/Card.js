import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { BsGithub, BsBookFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const CardWrapper = styled.section`
  &:after {
    opacity: ${(props) => 100 - props.progress * 1.3}%;
  }
`;
const BusinessCardWrapper = styled.div`
  transform: translate(-50%, -50%)
    rotateY(${(props) => (props.progress <= 180 ? props.progress : 180)}deg);
`;

const Card = ({ scrollProgress }) => {
  const [scrollCard, setScrollCard] = useState(0);
  useEffect(() => {
    if (scrollProgress < 50) {
      setScrollCard(scrollProgress * 13);
    }
  }, [scrollProgress]);
  return (
    <CardWrapper className="Card" progress={scrollProgress}>
      <h2 className="blind">프론트엔드 개발자 유순상의 명함입니다.</h2>
      <BusinessCardWrapper className="businessCard" progress={scrollCard}>
        <article className="front commonCard">
          <header>
            <h3>유순상</h3>
            <p>front-end developer</p>
          </header>
          <ul className="address">
            <li>
              <a href="mailto:yoofh2006@gmail.com" target="_blank">
                <MdEmail />
                <span className="blind">이메일</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/yooss2006" target="_blank">
                <BsGithub />
                <span className="blind">깃허브</span>
              </a>
            </li>
            <li>
              <a href="https://velog.io/@yooss2006" target="_blank">
                <BsBookFill />
                <span className="blind">블로그</span>
              </a>
            </li>
          </ul>
        </article>
        <article className="back commonCard">
          <ol className="intro">
            <li>1. 더 좋은 코드를 짜기 위해 노력합니다.</li>
            <li>2. 접근성을 고려해 개발합니다. </li>
            <li>3. 공부한 내용은 꼼꼼히 정리합니다. </li>
            <li>4. 포토샵을 잘 다룹니다..</li>
          </ol>
        </article>
      </BusinessCardWrapper>
    </CardWrapper>
  );
};

export default Card;
