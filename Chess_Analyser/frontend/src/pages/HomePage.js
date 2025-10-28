import React, { useState } from "react";
import { getAnalysis } from "../api";
import GameList from "../components/GameList";

const HomePage = () => {
  const [username, setUsername] = useState("");
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!username) return alert("Please enter your Chess.com username");
    setLoading(true);
    try {
      const res = await getAnalysis(username);
      setGames(res);
    } catch (err) {
      alert("Error fetching data. Check username or server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>♟ Chess Game Analyzer</h1>
      <input
        className="input-box"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter Chess.com username"
      />
      <button className="analyze-btn" onClick={handleAnalyze} disabled={loading}>
        {loading ? "Analyzing..." : "Analyze Games"}
      </button>
      <GameList games={games} />
    </div>
  );
};

export default HomePage;
