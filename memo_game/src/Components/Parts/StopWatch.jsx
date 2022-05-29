import React, { useEffect, useState } from "react";
import "../Pages/Memory-Game-Component/MemoGame.css";
export default function StopWatch() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  var timer;

  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds + 1);

      if (seconds === 59) {
        setSeconds(0);
        setMinutes(minutes + 1);
      }
    }, 1000);
  }, [seconds, minutes]);
  return (
    <>
      <h1 className="moves">Stop Watch:</h1>
      <h1 className="moves">
        {minutes < 10 ? "0" + minutes : minutes}:
        {seconds < 10 ? "0" + seconds : seconds}
      </h1>
    </>
  );
}
