import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../assets/logo.png";

const Header = ({ curPage, handleCurPage, handleLogoClick }) => {
  const [navMode, setNavMode] = useState(false);

  const navigate = useNavigate();

  const pageMove = (route) => {
    if (navMode) {
      setNavMode(false);
    }
    handleCurPage(route.slice(1));
    navigate(route);
  };

  return (
    <header className="header">
      <div className="headerCont">
        <h1>
          <button onClick={handleLogoClick}>
            <img src={logo} alt="유순상의 포트폴리오" />
          </button>
        </h1>
        <button className="menuCont" onClick={() => setNavMode(true)}>
          <span className="blind">메뉴 버튼</span>
          <div className="menu">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </button>
        <nav className={navMode ? "navMode" : ""}>
          <ul>
            <li>
              <button
                onClick={() => pageMove("/")}
                className={curPage === "introduce" ? "on" : ""}
              >
                Introduce
              </button>
            </li>
            <li>
              <button
                onClick={() => pageMove("/skill")}
                className={curPage === "skill" ? "on" : ""}
              >
                Skill
              </button>
            </li>
            <li>
              <button
                onClick={() => pageMove("/project")}
                className={curPage === "project" ? "on" : ""}
              >
                Project
              </button>
            </li>
            <li>
              <button
                onClick={() => pageMove("/experience")}
                className={curPage === "experience" ? "on" : ""}
              >
                Experience
              </button>
            </li>
          </ul>
          <button className="close" onClick={() => setNavMode(false)}>
            x
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
