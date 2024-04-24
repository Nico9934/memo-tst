import React from "react";
import { useGame } from "../context/GameProvider";

const Header = () => {
  const { level, soundOn, setSoundOn, matchedPairs, started, total } =
    useGame();
  return (
    <div>
      {" "}
      <div className="bg-blue-500 px-6 py-4 w-full font-pixel flex md:flex-row flex-col items-center justify-between">
        <h1 className="text-2xl md:m-auto font-semibold text-gray-100">
          MemoTest​
        </h1>
        <div className="flex flex-col md:flex-row gap-1 md:gap-3 items-center">
          {started && (
            <>
              <div className="md:bg-gray-200 text-xs md:text-md rounded-md md:px-3 md:py-2 font-semibold uppercase text-gray-100 md:text-blue-500">
                Level: {level}
              </div>
              <div className="md:bg-gray-200 text-xs md:text-md rounded-md md:px-3 md:py-2 font-semibold uppercase text-gray-100 md:text-blue-500">
                {/* Nivel: {level} */}
                Matchs: {matchedPairs - 1}
              </div>
              <div className="md:bg-gray-200 text-xs md:text-md rounded-md md:px-3 md:py-2 font-semibold uppercase text-gray-100 md:text-blue-500">
                {/* Nivel: {level} */}
                Total: {total}
              </div>
            </>
          )}
          <div
            onClick={() => setSoundOn(!soundOn)}
            className="md:bg-gray-200 text-xs md:text-md md:hover:bg-gray-300 hover:cursor-pointer transition duration-100  rounded-md md:px-3 md:py-2 font-semibold uppercase text-gray-100 md:text-blue-500"
          >
            <p className="">Sounds: {soundOn ? "On" : "Off"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
