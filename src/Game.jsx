function Game({ pokemons, handleImageClick }) {
  return (
    <div id="game">
      {pokemons.map((pokemon, idx) => {
        return (
          <div
            className="memory-card"
            key={idx}
            onClick={() => handleImageClick(idx)}
          >
            <img src={pokemon.image} alt={pokemon.name} className="pokemon" />
          </div>
        );
      })}
    </div>
  );
}

export default Game;
