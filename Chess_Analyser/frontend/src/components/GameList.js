import React from "react";
import { useNavigate } from "react-router-dom";

const GameList = ({ games }) => {
  const navigate = useNavigate();

  if (!games || games.length === 0)
    return <p style={{ marginTop: "2rem" }}>No games analyzed yet.</p>;

  return (
    <div>
      <h2>Analyzed Games</h2>
      <div className="game-list">
        {games.map((g) => (
          <div
            key={g._id}
            className="game-card"
            onClick={() => navigate("/game", { state: { game: g } })}
          >
            <h3>vs {g.opponent}</h3>
            <p>Result: {g.result}</p>
            <p>Blunders: {g.moves.filter(m => m.classification === "Blunder").length}</p>
            <p>Mistakes: {g.moves.filter(m => m.classification === "Mistake").length}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameList;
