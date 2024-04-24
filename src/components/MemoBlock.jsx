import { useEffect, useState } from "react";
import clickCardSound from "../assets/sounds/spinncard.mp3";
import { useGame } from "../context/GameProvider";

const MemoBlock = ({ emoji, handleMemoClick, animating, soundOn }) => {
  const [clickedCard] = useState(new Audio(clickCardSound));

  const { level } = useGame();

  const handleOnClickCard = () => {
    clickedCard.play();
  };

  return (
    <div
      className="memo-block"
      onClick={() => {
        !emoji.flipped && !animating && handleMemoClick(emoji);
        if (soundOn) handleOnClickCard();
      }}
    >
      <div
        className={`memo-block-inner w-12 h-12 md:w-24 md:h-24 m-auto ${
          emoji.flipped && "memo-block-flipped"
        }`}
      >
        {/* Parte de atras fija */}
        <div
          className={`memo-block-front text-3xl md:text-6xl w-12 h-12 md:w-24 md:h-24 bg-[url('src/assets/back-carts/1.png')] bg-cover shadow-lg`}
        ></div>

        {/* Parte de atrass dinamica que no funciona */}
        {/* <div
          className={`memo-block-front bg-cover shadow-lg text-3xl md:text-6xl w-12 h-12 md:w-24 md:h-24
          ${
            level <= 1
              ? "bg-[url(src/assets/back-carts/1.png)]"
              : level <= 2
              ? "bg-[url(src/assets/back-carts/2.png)]"
              : level <= 3
              ? "bg-[url(src/assets/back-carts/3.png)]"
              : level <= 4
              ? "bg-[url(src/assets/back-carts/4.png)]"
              : level <= 5
              ? "bg-[url(src/assets/back-carts/5.png)]"
              : level <= 6
              ? "bg-[url(src/assets/back-carts/6.png)]"
              : level <= 7
              ? "bg-[url(src/assets/back-carts/7.png)]"
              : level <= 8
              ? "bg-[url(src/assets/back-carts/8.png)]"
              : level <= 9
              ? "bg-[url(src/assets/back-carts/9.png)]"
              : "bg-[url(src/assets/back-carts/10.png)]"
          }`}
        ></div> */}

        {/* Frente de la carta */}
        <div className="memo-block-back text-3xl md:text-6xl w-12 h-12 md:w-24 md:h-24 bg-slate-200 ">
          {emoji.icon}
        </div>
      </div>
    </div>
  );
};

export default MemoBlock;
