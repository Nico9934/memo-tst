import React, { useState } from "react";

import hoverMenu from "../assets/sounds/hover-click-menu.mp3";
import checkedMenu from "../assets/sounds/checked.mp3";
import { useGame } from "../context/GameProvider";

const Intro = () => {
  const { intro, setIntro, soundOn, started, setStarted } = useGame();

  const [hoverAudio] = useState(new Audio(hoverMenu));
  const [startGameAudio] = useState(new Audio(checkedMenu));

  const handleHover = () => {
    if (soundOn) hoverAudio.play();
  };
  const startGame = () => {
    setStarted(true);
    if (soundOn) startGameAudio.play();
    setIntro(!intro);
  };

  return (
    <div className="md:w-2/5 h-auto md:m-auto md:mt-16 bg-fuchsia-800 border-4 rounded-none text-center gap-16 flex flex-col font-bold text-gray-300  p-5 font-pixel text-4xl">
      <h3 className=" text-2xl md:text-4xl">MemoTest</h3>
      <div className="flex justify-between w-full md:w-2/3 gap-5 flex-col text-2xl m-auto">
        <button
          onMouseEnter={handleHover}
          onClick={startGame}
          className="border-2 px-2 py-1 hover:bg-fuchsia-900 hover:cursor-pointer border-gray-200"
        >
          Iniciar Juego
        </button>
        <button
          onMouseEnter={handleHover}
          className="border-2 px-2 py-1 hover:bg-fuchsia-900 hover:cursor-pointer border-gray-200"
        >
          Ver Ranking
        </button>
      </div>
    </div>
  );
};

export default Intro;
