import React, { useState } from "react";
import styled from "styled-components";

import { skill } from "../util/skill";

const StyledButton = styled.button`
  width: ${(props) => 100 / props.skillLength}%;
`;

const Skill = () => {
  const [skillTree, isSkillTree] = useState(skill);

  const handleCheckBtn = (name) => {
    isSkillTree(
      skillTree.map((item) =>
        item.name === name
          ? { ...item, active: !item.active }
          : { ...item, active: false }
      )
    );
  };

  const selectButton = () => {
    const findData = skillTree.find((item) => item.active === true);
    if (findData) {
      return findData.desc;
    }
    return false;
  };

  return (
    <section className="Skill container">
      <h2>기술 스택</h2>
      <div className="skillBoard">
        {skillTree.map((item) => {
          return (
            <StyledButton
              key={item.name}
              skillLength={skillTree.length}
              onClick={() => handleCheckBtn(item.name)}
            >
              <img
                src={item.img[0]}
                alt={item.name}
                className={item.active ? "hide" : ""}
              />
              <img
                src={item.img[1]}
                alt={item.name}
                className={item.active ? "" : "hide"}
              />
            </StyledButton>
          );
        })}
      </div>

      {selectButton() ? (
        <div className="skillDesc">
          {selectButton().map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      ) : (
        ""
      )}
    </section>
  );
};

export default Skill;
