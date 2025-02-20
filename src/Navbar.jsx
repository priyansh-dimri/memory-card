/* eslint-disable react/prop-types */
function Navbar({ currScore, maxScore }) {
  return (
    <>
      <div className="game-title">Memory Card Game</div>
      <div className="nav-tile curr-score">Current Score: {currScore}</div>
      <div className="nav-tile max-score">Max Score: {maxScore}</div>
    </>
  );
}

export default Navbar;
