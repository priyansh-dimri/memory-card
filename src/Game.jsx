/* eslint-disable react/prop-types */
function Game({ pokemons, handleImageClick }) {
  return (
    <>
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
    </>
  );
}

export default Game;
