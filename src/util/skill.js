import css from "../assets/skill/css.png";
import cssf from "../assets/skill/cssf.png";
import html from "../assets/skill/html.png";
import htmlf from "../assets/skill/htmlf.png";
import js from "../assets/skill/js.png";
import jsf from "../assets/skill/jsf.png";
import sass from "../assets/skill/sass.png";
import sassf from "../assets/skill/sassf.png";
import ts from "../assets/skill/ts.png";
import tsf from "../assets/skill/tsf.png";
import rct from "../assets/skill/rct.png";
import rctf from "../assets/skill/rctf.png";

export const skill = [
  {
    name: "html",
    active: false,
    desc: [
      "시멘틱 마크업을 지향합니다.",
      "검색 엔진 최적화를 위해 웹 표준을 지킵니다.",
      "웹 접근성을 준수합니다.",
    ],
    img: [html, htmlf],
  },
  {
    name: "css",
    active: false,
    desc: [
      "다양한 CSS 기법과 미디어쿼리 등을 이용한 반응형 웹사이트를 구현 가능합니다.",
      "애니메이션 및 인터랙션 UI를 구현합니다.",
    ],
    img: [css, cssf],
  },
  {
    name: "js",
    active: false,
    desc: [
      "ES6+ 문법을 숙지했습니다.",
      "반응형 웹, 메뉴, 키보드 제어 등을 구현 가능합니다.",
    ],
    img: [js, jsf],
  },
  {
    name: "ts",
    active: false,
    desc: ["type을 사용하여 오류를 사전에 예방합니다."],
    img: [ts, tsf],
  },
  {
    name: "sass",
    active: false,
    desc: ["Sass 문법 사용 가능합니다."],
    img: [sass, sassf],
  },
  {
    name: "react",
    active: false,
    desc: [
      "context API를 활용한 상태관리가 가능합니다.",
      "상황에 맞는 React hooks를 사용합니다.",
      "Styled Component를 이용한 컴포넌트 및 페이지 제작 가능합니다.",
      "컴포넌트 최적화가 가능합니다.",
    ],
    img: [rct, rctf],
  },
];
