import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ChessBoardView from "../components/ChessBoardView";
import EvalGraph from "../components/EvalGraph";
import "../styles.css";

const GameDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [game, setGame] = useState(null);

  // game data is passed via react-router `state`
  useEffect(() => {
    if (location.state && location.state.game) {
      setGame(location.state.game);
    } else {
      navigate("/"); // if accessed directly, redirect to home
    }
  }, [location, navigate]);

  if (!game) return <p>Loading game...</p>;

  return (
    <div className="container">
      <button
        className="analyze-btn"
        onClick={() => navigate(-1)}
        style={{ marginBottom: "1rem" }}
      >
        ⬅ Back
      </button>

      <h2>Game vs {game.opponent}</h2>
      <p><strong>Result:</strong> {game.result}</p>
      <p>
        <strong>Blunders:</strong> {game.moves.filter(m => m.classification === "Blunder").length} | 
        <strong> Mistakes:</strong> {game.moves.filter(m => m.classification === "Mistake").length}
      </p>

      <div style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}>
        <ChessBoardView pgn={game.pgn} />
        <EvalGraph moves={game.moves} />
      </div>

      <h3 style={{ marginTop: "2rem" }}>Move Analysis</h3>
      <div className="move-table">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Move</th>
              <th>Eval Before</th>
              <th>Eval After</th>
              <th>Change</th>
              <th>Classification</th>
            </tr>
          </thead>
          <tbody>
            {game.moves.map((m, i) => (
              <tr
                key={i}
                className={
                  m.classification === "Blunder"
                    ? "blunder-row"
                    : m.classification === "Mistake"
                    ? "mistake-row"
                    : m.classification === "Inaccuracy"
                    ? "inaccuracy-row"
                    : ""
                }
              >
                <td>{i + 1}</td>
                <td>{m.move}</td>
                <td>{(m.evalBefore / 100).toFixed(2)}</td>
                <td>{(m.evalAfter / 100).toFixed(2)}</td>
                <td>{(m.delta / 100).toFixed(2)}</td>
                <td>{m.classification}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GameDetail;
