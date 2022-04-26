import React from "react";
import "./SingleCard.css";

export default function SingleCard({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };
  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} />
        <img
          className="back"
          src="/marvel_imgs/MarvelLogo2.png"
          onClick={handleClick}
          alt="some cover pic"
        />
      </div>
    </div>
  );
}
