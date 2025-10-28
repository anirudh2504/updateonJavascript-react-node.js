import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const EvalGraph = ({ moves }) => {
  const data = moves.map((m, i) => ({
    move: i + 1,
    eval: m.evalAfter / 100, // convert centipawns to pawns
  }));

  return (
    <div style={{ marginTop: "2rem" }}>
      <h3>Evaluation Graph</h3>
      <ResponsiveContainer width="95%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="move" label={{ value: "Move", position: "insideBottomRight", offset: 0 }} />
          <YAxis label={{ value: "Eval (pawns)", angle: -90, position: "insideLeft" }} />
          <Tooltip />
          <Line type="monotone" dataKey="eval" stroke="#0077ff" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EvalGraph;
