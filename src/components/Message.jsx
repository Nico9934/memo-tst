import React from "react";
import { useGame } from "../context/GameProvider";

const Message = () => {
  const { win, text } = useGame();

  return (
    <div
      className={
        win
          ? "md:w-2/6 mb-5 w-full font-pixel text-center font-semibold uppercase text-gray-100 py-2 rounded-md bg-green-600 mx-auto justify-center"
          : "md:w-2/6 mb-5 w-full font-pixel text-center font-semibold uppercase text-gray-100 py-2 rounded-md bg-red-600 mx-auto justify-center"
      }
    >
      <p>{text}</p>
    </div>
  );
};

export default Message;
