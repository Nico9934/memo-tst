import { useEffect } from "react";
import MemoBlock from "./MemoBlock";
import { useGame } from "../context/GameProvider";

const Board = () => {
  const { shuffledMemoBlocks, handleMemoClick, animating, level, soundOn } =
    useGame();

  useEffect(() => {}, [level]);
  return (
    <main
      className={`grid ${
        level > 9
          ? "md:grid-cols-8"
          : level > 7
          ? "md:grid-cols-6"
          : level > 5
          ? "md:grid-cols-6"
          : level > 3
          ? "md:grid-cols-6"
          : "md:grid-cols-4"
      } grid-cols-4 gap-2 md:bg-fuchsia-800 md:p-5 rounded-md m-auto`}
    >
      {shuffledMemoBlocks.map((emoji) => (
        <MemoBlock
          key={emoji.index}
          emoji={emoji}
          handleMemoClick={handleMemoClick}
          animating={animating}
          soundOn={soundOn}
        />
      ))}
    </main>
  );
};

export default Board;
