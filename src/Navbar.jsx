function Navbar({ currScore, maxScore, restartGame }) {
  return (
    <div id="navbar">
      {/* Display reset game button using resetGame function and
  displays main logo, curr and max score on navbar */}
      <div className="game-title">Memory Card Game</div>
      <div className="nav-tile curr-score">Current Score: {currScore}</div>
      <div className="nav-tile max-score">Max Score: {maxScore}</div>
      <button
        type="button"
        className="nav-tile restart"
        onClick={() => restartGame()}
      >
        RESTART
      </button>
    </div>
  );
}

export default Navbar;
