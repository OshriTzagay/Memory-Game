import React from "react";
import { BrowserRouter, Link, Route, Routes ,HashRouter } from "react-router-dom";
import LandingPage from "./Pages/LandingPage-Component/LandingPage";
import MemoGame from "./Pages/Memory-Game-Component/MemoGame";
export default function () {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/Memory-Game" element={<MemoGame />}></Route>
      </Routes>
    </HashRouter>
  );
}
