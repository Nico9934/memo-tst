import React, { useEffect, useState } from "react";
import { useGame } from "../context/GameProvider";
import loseGameAudio from "../assets/sounds/lose-level.mp3";

const Timer = () => {
  const [second, setSecond] = useState();
  const [showerTime, setShowerTime] = useState("");
  const [loseGame] = useState(new Audio(loseGameAudio));

  const {
    setWin,
    win,
    started,
    setText,
    setMessage,
    setIntro,
    level,
    setLevel,
    soundOn,
    setMatchedPairs,
    setStarted,
    setTotal,
  } = useGame();

  useEffect(() => {
    if (started) {
      setSecond(15 + (level - 1) * 9);
    }
  }, [started, level]);

  // Logica para mostrar el reloj
  useEffect(() => {
    if (started && second !== undefined) {
      const timer = setTimeout(() => {
        if (second > 0) {
          setSecond((prevSecond) => prevSecond - 1);
        }
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [second, started]);

  useEffect(() => {
    if (second !== undefined) {
      setShowerTime(second < 10 ? ` 0${second}` : second);
    }
  }, [second]);

  useEffect(() => {
    if (second === 0 && started && !win) {
      setWin(false);
      setText("Has perdido");
      if (soundOn) loseGame.play();
      setMessage(true);
      setTimeout(() => {
        setMatchedPairs(1);
        setLevel(1);
        setTotal(0);
        setStarted(false);
        setMessage(false);
        setIntro(true);
        setText("");
      }, 4000);
    }
  }, [second, started, win]);

  return (
    <>
      {/* {!win && ( */}
      <div className="position absolute bottom-5 md:bottom-10 right-5 md:right-10 w-12 h-12 md:w-24 md:h-24 rounded-full bg-gray-200 text-gray-900 flex justify-center items-center text-xl md:text-4xl font-bold font-pixel">
        {showerTime}
      </div>
      {/* )} */}
    </>
  );
};

export default Timer;
