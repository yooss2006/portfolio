import React, { useState } from "react";
import htmlCssJs from "../assets/skill/htmlCssJs.png";
import htmlCssJsfill from "../assets/skill/htmlCssJsfill.png";
import reactImg from "../assets/skill/react.png";
import reactImgfill from "../assets/skill/reactfill.png";
import sassTs from "../assets/skill/sassTs.png";
import sassTsfill from "../assets/skill/sassTsfill.png";
import {
  htmlCssJs as htmlhtmlCssDesc,
  sassTs as sassTsDesc,
  react as reactDesc,
} from "../util/skillDesc";

const Skill = () => {
  const [activeIcon, isActiveIcon] = useState([
    { name: "htmlCssJs", active: false, desc: htmlhtmlCssDesc },
    { name: "sassTs", active: false, desc: sassTsDesc },
    { name: "react", active: false, desc: reactDesc },
  ]);

  const handleButton = (number) => {
    isActiveIcon(
      activeIcon.map((item, index) =>
        index === number
          ? { ...item, active: !item.active }
          : { ...item, active: false }
      )
    );
  };

  const selectButton = () => {
    const findData = activeIcon.find((item) => item.active == true);
    if (findData) {
      return findData.desc;
    }
    return false;
  };
  console.log(selectButton());

  return (
    <section className="Skill container">
      <h2>기술 스택</h2>
      <div className="skillBoard">
        <button onClick={() => handleButton(0)}>
          <img
            src={activeIcon[0].active ? htmlCssJsfill : htmlCssJs}
            alt="html, css, javascript"
          />
        </button>
        <button onClick={() => handleButton(1)}>
          <img
            src={activeIcon[1].active ? sassTsfill : sassTs}
            alt="sass, typescript"
          />
        </button>
        <button onClick={() => handleButton(2)}>
          <img
            src={activeIcon[2].active ? reactImgfill : reactImg}
            className="reactImg"
            alt="react"
          />
        </button>
      </div>
      <div className="skillDesc">
        {selectButton() ? selectButton().map((item) => <p>{item}</p>) : ""}
      </div>
    </section>
  );
};

export default Skill;
