import "./App.css";

import Header from "./components/Header.jsx";
import GameProvider, { useGame } from "./context/GameProvider.jsx";
import GameContainer from "./components/GameContainer.jsx";

function App() {
  return (
    <GameProvider>
      <>
        <Header />
        <GameContainer />
      </>
    </GameProvider>
  );
}

export default App;

// const darVueltaTodos = async () => {
//   const listaTodosVuelta = shuffledMemoBlocks.map((e) => {
//     return { ...e, flipped: false };
//   });
//   await setShuffledMemoBlocks(listaTodosVuelta);
// };
