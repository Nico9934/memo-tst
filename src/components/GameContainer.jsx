import React from "react";
import Intro from "./Intro";
import Board from "./Board";
import Timer from "./Timer";
import { useGame } from "../context/GameProvider";
import Message from "./Message";

const GameContainer = () => {
  const { intro, started, message } = useGame();
  return (
    <div className="w-full h-[calc(100vh-5rem)] md:min-h-screen md:h-[calc(100vh-4rem)] p-2 md:p-10 bg-gradient-to-br from-blue-800 via-fuchsia-700 to-fuchsia-800 flex flex-col items-center justify-center">
      {intro ? (
        <Intro />
      ) : (
        <div className="flex h-auto flex-col w-full justify-center item-center">
          {message && <Message />}
          <Board />

          {started && <Timer />}
        </div>
      )}
    </div>
  );
};

export default GameContainer;
