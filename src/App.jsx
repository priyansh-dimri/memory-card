import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Game from "./Game";

function App() {
  const [maxScore, setMaxScore] = useState(0);
  const [currScore, setCurrScore] = useState(0);
  function shuffleCards() {
    // Shuffles memory cards
  }

  function resetGame() {
    // Sets currScore to 0
    // Calls shuffleCards()
  }

  function incrementCurrScore() {
    // Increments currScore by 1
  }

  function handleImageClick() {
    // Checks repeated image click
    // Calls incrementCurrScore()
    // Checks if all images have been clicked. If yes, calls resetGame()
    // Calls shuffleCards()
  }

  return (
    <>
      <Navbar />
      <Game />
    </>
  );
}

export default App;
