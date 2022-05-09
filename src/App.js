import "./css/common.css";
import { useEffect, useRef, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Card from "./components/Card";
import Introduce from "./components/Introduce";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Experience from "./components/Experience";

import logo from "./assets/logo.png";

function App() {
  const navigate = useNavigate();

  const [scrollProgress, setScrollProgress] = useState(0);
  const [isCardOn, setIsCardOn] = useState(true);

  useEffect(() => {
    if (isCardOn && Number.isInteger(window.pageYOffset)) {
      window.addEventListener("scroll", handleScroll);
    }
  }, [scrollProgress]);
  const handleScroll = () => {
    //현재 스크롤 진행 상황
    const currentScroll = window.pageYOffset;
    if (Number.isInteger(currentScroll)) {
      //100vh의 크기
      const screenY = window.innerHeight;
      if (currentScroll > screenY) {
        setIsCardOn(false);
      } else {
        setIsCardOn(true);
        setScrollProgress((currentScroll / screenY) * 100);
      }
    }
  };

  const introduceRef = useRef(null);
  const skillRef = useRef(null);
  const projectRef = useRef(null);
  const experienceRef = useRef(null);
  const pageMove = (route) => {
    navigate(route);
  };

  return (
    <div className="App">
      <Card scrollProgress={scrollProgress} />
      <header className="header">
        <h1>
          <img src={logo} alt="유순상의 포트폴리오" />
        </h1>
        <nav>
          <ul>
            <li>
              <button onClick={() => pageMove("/")}>Introduce</button>
            </li>
            <li>
              <button onClick={() => pageMove("/skill")}>Skill</button>
            </li>
            <li>
              <button onClick={() => pageMove("/project")}>Project</button>
            </li>
            <li>
              <button onClick={() => pageMove("/experience")}>
                Experience
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" exact={true} element={<Introduce />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/project" element={<Project />} />
          <Route
            path="/experience"
            element={<Experience experienceRef={experienceRef} />}
          />
        </Routes>
      </main>
      <footer>
        <p>hello welcome yooss world. 2022</p>
      </footer>
    </div>
  );
}

export default App;
