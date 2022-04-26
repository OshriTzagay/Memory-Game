import React from "react";
import { Link } from "react-router-dom";
import MemoGame from "../Memory-Game-Component/MemoGame";
import "./LandingPage.css";
export default function LandingPage() {
  return (
    <div className="LP-Container">
      <img className="LandingCoverImg" src="marvel_imgs/cover1.jpg" alt="" />

      <div className="Landing-btn">
        <a href="#middle">
          <img src="marvel_imgs/hero.png" alt="" className="Landing-hero" />
        </a>
      </div>

      <div className="Scroll-Section" id="middle">
        <div className="left">
          <h1>Save The World</h1>
        </div>

        <div className="right">
          <img src="https://wallpapermemory.com/uploads/575/marvel-background-hd-1280x800-322318.jpg" alt="" />
      <Link to="/memogame"><button className="goMemoGame">Click To Start</button></Link>    
        </div>
      </div>
    </div>
  );
}
