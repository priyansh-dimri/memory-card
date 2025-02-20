/* eslint-disable react/prop-types */
function Help({ restartGame }) {
  return (
    <>
      <div className="instruction">
        Flip a card, avoid repeats and Win! 🚀🔥
      </div>
      <div className="nav-tile btn-parent">
        <button
          type="button"
          className="nav-tile restart"
          onClick={() => restartGame()}
        >
          RESTART
        </button>
      </div>
    </>
  );
}

export default Help;
