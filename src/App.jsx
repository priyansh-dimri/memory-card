import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Game from "./Game";

function App() {
  const [maxScore, setMaxScore] = useState(0);
  const [currScore, setCurrScore] = useState(0);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function fetchPokemonImages() {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon/?limit=12"
        );

        const data = response.json();

        const pokemonImages = await Promise.all(
          data.results.map(async (pokemon) => {
            const pokemonResponse = await fetch(pokemon.url);
            const pokemonDetails = await pokemonResponse.json();

            return {
              name: pokemonDetails.name,
              image: pokemonDetails.sprites.other.dream_world.front_default,
              clicked: false,
            };
          })
        );

        setPokemons(pokemonImages);
      } catch (error) {
        console.error("Error fetching pokemon data:", error);
      }
    }

    fetchPokemonImages();
  }, []);

  function shuffleCards() {
    setPokemons((pokemons) => {
      const shuffled = [...pokemons];
      for (let i = shuffled.length - 1; i > 0; --i) {
        let j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }

      return shuffled;
    });
  }

  function resetGame() {
    // Sets currScore to 0
    setCurrScore(0);
    // Calls shuffleCards()
    shuffleCards();
  }

  function incrementCurrScore() {
    // Increments currScore by 1
    setCurrScore((currScore) => currScore + 1);
  }

  function handleImageClick(idx) {
    // Checks repeated image click
    if (pokemons[idx].clicked === true) {
      resetGame();
      return;
    }

    // Calls incrementCurrScore() and update maxScore
    incrementCurrScore();
    setMaxScore((maxScore) => Math.max(maxScore, currScore));

    // Checks if all images have been clicked. If yes, call resetGame()
    if (currScore === 12) {
      resetGame();
      return;
    }

    // Calls shuffleCards()
    shuffleCards();
  }

  return (
    <>
      <Navbar />
      <Game />
    </>
  );
}

export default App;
