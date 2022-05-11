import { useCallback, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { throttle } from "lodash";

import Header from "./components/Header";
import Card from "./components/Card";
import Introduce from "./components/Introduce";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Experience from "./components/Experience";

import "./css/common.css";
import Footer from "./components/Footer";

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isCardOn, setIsCardOn] = useState(true);
  const [curPage, setCurPage] = useState("introduce");

  const handleScroll = useCallback(
    throttle(() => {
      //현재 스크롤 진행 상황
      const currentScroll = window.pageYOffset;
      //100vh의 크기
      const screenY = window.innerHeight;
      if (currentScroll + 150 >= screenY) {
        setIsCardOn(false);
        return;
      }
      setScrollProgress((currentScroll / screenY) * 100);
    }, 300),
    [scrollProgress]
  );

  useEffect(() => {
    if (isCardOn) {
      window.addEventListener("scroll", handleScroll);
    }
  }, []);

  const handleLogoClick = () => {
    setIsCardOn(true);
    window.scrollTo(0, 0);
  };

  const handleCurPage = (pageName) => {
    if (!pageName) {
      setCurPage("introduce");
      return;
    }
    setCurPage(pageName);
  };

  return (
    <div className="App">
      {isCardOn ? (
        <Card scrollProgress={scrollProgress} />
      ) : (
        <Header
          curPage={curPage}
          handleCurPage={handleCurPage}
          handleLogoClick={handleLogoClick}
        />
      )}
      <main>
        <Routes>
          <Route path="/" exact={true} element={<Introduce />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/project" element={<Project />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
