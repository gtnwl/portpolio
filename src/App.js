import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MAIN from "./html/main.js";
import PORTFOLIO01 from "./html/portfolio_01.js";
import PORTFOLIO02 from "./html/portfolio_02.js";
import PORTFOLIO03 from "./html/portfolio_03.js";
import PORTFOLIO04 from "./html/portfolio_04.js";
import PORTFOLIO05 from "./html/portfolio_05.js";
import PORTFOLIO06 from "./html/portfolio_06.js";
import PORTFOLIO07 from "./html/portfolio_07.js";
import PORTFOLIO08 from "./html/portfolio_08.js";
import PORTFOLIO09 from "./html/portfolio_09.js";
import PORTFOLIO10 from "./html/portfolio_10.js";
import "./resources/sass/common.scss";
import Header from "./html/include/header.js";
import SKILLS from "./html/skills.js";
import ABOUT from "./html/about.js";
import Footer from "./html/include/footer.js";
function App() {
  return (
    <>
      <BrowserRouter basename="/portfolio/">
        <div className="main">
          <div className="wrap flex-fix">
            <div className="container index movePage">
              <Header></Header>
              <Routes>
                <Route path={"/projects"} element={<MAIN />}></Route>
                <Route path={"/skills"} element={<SKILLS />}></Route>
                <Route path={"/about"} element={<ABOUT />}></Route>
                <Route path={"/01"} element={<PORTFOLIO01 />}></Route>
                <Route path={"/02"} element={<PORTFOLIO02 />}></Route>
                <Route path={"/03"} element={<PORTFOLIO03 />}></Route>
                <Route path={"/04"} element={<PORTFOLIO04 />}></Route>
                <Route path={"/05"} element={<PORTFOLIO05 />}></Route>
                <Route path={"/06"} element={<PORTFOLIO06 />}></Route>
                <Route path={"/07"} element={<PORTFOLIO07 />}></Route>
                <Route path={"/08"} element={<PORTFOLIO08 />}></Route>
                <Route path={"/09"} element={<PORTFOLIO09 />}></Route>
                <Route path={"/10"} element={<PORTFOLIO10 />}></Route>
              </Routes>
              <Footer></Footer>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
