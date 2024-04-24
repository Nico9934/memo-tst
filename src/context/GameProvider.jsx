import React, { createContext, useContext, useState, useEffect } from "react";
import winGameAudio from "../assets/sounds/win-level.mp3";
import musicSoundAudio from "../assets/sounds/play-music.mp3";
import checkedSound from "../assets/sounds/checked.mp3";
import shuffleArray from "../libs/shuffleArray.js";
import emojiList from "../libs/emojis.js";

const AppContext = createContext();
export const useGame = () => useContext(AppContext);

const GameProvider = ({ children }) => {
  const [level, setLevel] = useState(1);
  const [total, setTotal] = useState(0);

  const [soundOn, setSoundOn] = useState(false);
  const [shuffledMemoBlocks, setShuffledMemoBlocks] = useState([]);
  const [selectedMemoBlock, setSelectedMemoBlock] = useState(null);
  const [animating, setAnimating] = useState(false);
  const [matchedPairs, setMatchedPairs] = useState(1);

  const [message, setMessage] = useState(false);
  const [text, setText] = useState("");
  const [win, setWin] = useState(false);

  const [intro, setIntro] = useState(true);
  const [winGame] = useState(new Audio(winGameAudio));
  const [musicSound] = useState(new Audio(musicSoundAudio));
  const [checkedPairSound] = useState(new Audio(checkedSound));
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const shuffledEmojiList = shuffleArray([
      ...emojiList[level],
      ...emojiList[level],
    ]);
    setShuffledMemoBlocks(
      shuffledEmojiList.map((icon, i) => ({ index: i, icon, flipped: false }))
    );
  }, [level, intro]);

  useEffect(() => {
    if (soundOn) musicSound.play();
    if (!soundOn) musicSound.pause();
  }, [soundOn]);

  const handleMemoClick = (memoBlock) => {
    const flippedMemoBlock = { ...memoBlock, flipped: true };
    let shuffledMemoBlocksCopy = [...shuffledMemoBlocks];
    shuffledMemoBlocksCopy.splice(memoBlock.index, 1, flippedMemoBlock);
    setShuffledMemoBlocks(shuffledMemoBlocksCopy);

    if (selectedMemoBlock == null) {
      setSelectedMemoBlock(memoBlock);
    } else if (selectedMemoBlock.icon == memoBlock.icon) {
      // Logica si coinciden
      if (soundOn) checkedPairSound.play();
      setSelectedMemoBlock(null);
      setMatchedPairs(matchedPairs + 1);
      setTotal(total + 1);

      if (matchedPairs == shuffledMemoBlocks.length / 2) {
        // Logica cuando se gana el nivel
        if (soundOn) winGame.play();
        setText("Has Ganado");
        setWin(true);
        setMessage(true);
        setTimeout(() => {
          setMessage(false);
          setMatchedPairs(1);
          setLevel(level + 1);
          setAnimating(false);
          setWin(false);
        }, 2000);
      }
    } else {
      setAnimating(true);
      setTimeout(() => {
        shuffledMemoBlocksCopy.splice(memoBlock.index, 1, memoBlock);
        shuffledMemoBlocksCopy.splice(
          selectedMemoBlock.index,
          1,
          selectedMemoBlock
        );

        setShuffledMemoBlocks(shuffledMemoBlocksCopy);
        setSelectedMemoBlock(null);
        setAnimating(false);
      }, [1000]);
    }
  };

  return (
    <AppContext.Provider
      value={{
        level,
        setLevel,
        soundOn,
        setSoundOn,
        shuffledMemoBlocks,
        setShuffledMemoBlocks,
        selectedMemoBlock,
        setSelectedMemoBlock,
        animating,
        setAnimating,
        matchedPairs,
        setMatchedPairs,
        message,
        setMessage,
        text,
        setText,
        win,
        setWin,
        intro,
        setIntro,
        winGame,
        musicSound,
        checkedPairSound,
        started,
        setStarted,
        handleMemoClick,
        total,
        setTotal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default GameProvider;
