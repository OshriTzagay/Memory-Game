// import "./App.css";
import "./MemoGame.css";
import { useState, useEffect,useRef } from "react";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import SingleCard from "../../Parts/SingleCard";

const cardImages = [
  { src: "/marvel_imgs/Spiderman.png", matched: false },
  { src: "/marvel_imgs/Hulk.png", matched: false },
  { src: "/marvel_imgs/Ironman.png", matched: false },
  { src: "/marvel_imgs/CaptainAmerica2.png", matched: false },
  { src: "/marvel_imgs/Flash.png", matched: false },
  { src: "/marvel_imgs/Deadpool.png", matched: false },
];

//!
function MemoGame() {

  const cardsRef =useRef(null)
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [timer, setTimer] = useState(0);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
    StopWatch();
    cardsRef.current.scrollIntoView({ behavior: "smooth" })

    
  };

  //handle the choice.
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  //!
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((pervCards) => {
          return pervCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurns();
      } else {
        setTimeout(() => resetTurns(), 1000);
      }
    }
    
  }, [choiceOne, choiceTwo]);

  console.log(cards);

  ///reset the user choices.
  const resetTurns = () => {
    setChoiceTwo(null);
    setChoiceOne(null);
    setTurns((pervTurn) => pervTurn + 1);
    if (turns === 12) {
      alert("The World Has been DESTROYTED!");
    }
    setDisabled(false);
  };

  const StopWatch = () => {
    setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
 
  };
  return (
    <div className="MemoGame">
      <nav>
        <li>
          <Link to="/">
            <AiFillHome />
          </Link>
        </li>
      </nav>
      <h1 className="the-title">Memory Game</h1>
      <p>You must complete this in less than 10 MOVES! </p>
      <div className="movesContainer">
        <h1 className="moves">Moves : {turns}</h1>
        <h1 className="moves">Timer :00:00: {timer}</h1>
      </div>
      <button className="start-btn" herf="#cards" onClick={shuffleCards}>New Game</button>

      <div ref={cardsRef} className="card-grid" id="cards">
        {cards.map((card) => (
          <SingleCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
    </div>
  );
}

export default MemoGame;
