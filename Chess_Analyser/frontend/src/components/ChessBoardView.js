import React, { useState, useEffect } from "react";
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";

const ChessBoardView = ({ pgn }) => {
  const [chess] = useState(new Chess());
  const [position, setPosition] = useState("start");
  const [moveIndex, setMoveIndex] = useState(0);
  const moves = chess.history();

  useEffect(() => {
    chess.loadPgn(pgn);
  }, [pgn]);

  const nextMove = () => {
    if (moveIndex < moves.length) {
      chess.move(moves[moveIndex]);
      setPosition(chess.fen());
      setMoveIndex(moveIndex + 1);
    }
  };

  const prevMove = () => {
    if (moveIndex > 0) {
      chess.undo();
      setPosition(chess.fen());
      setMoveIndex(moveIndex - 1);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Chessboard position={position} arePiecesDraggable={false} boardWidth={400} />
      <div style={{ marginTop: "1rem" }}>
        <button onClick={prevMove} disabled={moveIndex === 0}>◀️ Prev</button>
        <button onClick={nextMove} disabled={moveIndex >= moves.length}>Next ▶️</button>
      </div>
    </div>
  );
};

export default ChessBoardView;
