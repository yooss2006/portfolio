import Card from "./components/Card";
import "./css/common.css";
import Introduce from "./components/Introduce";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Experience from "./components/Experience";
function App() {
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

  return (
    <div className="App">
      <Card scrollProgress={scrollProgress} />
      <header className="header">
        <h1>유순상의 포트폴리오</h1>
        <nav>
          <ul>
            <li>Introduce</li>
            <li>Skill</li>
            <li>Project</li>
            <li>Experience</li>
          </ul>
        </nav>
      </header>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Introduce />} />
            <Route path="/skill" element={<Skill />} />
            <Route path="/project" element={<Project />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
