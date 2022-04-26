import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage-Component/LandingPage";
import MemoGame from "./Pages/Memory-Game-Component/MemoGame";
export default function () {
  return (
    <BrowserRouter>

    
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/memogame" element={<MemoGame />}></Route>

      </Routes>
    </BrowserRouter>
  );
}
