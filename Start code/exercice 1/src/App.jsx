import React, { useState } from "react";

export default function App() {
  const [score, setScore] = useState(0);

  const getScoreBarStyle = () => {
    // Compute width based on score (0 to 10 maps to 0% to 100%)
    const scoreWidth = `${(score / 10) * 100}%`;

    // Compute color based on score
    let scoreColor = "#f3bc47"; // Default color (yellowish)
    if (score < 4) scoreColor = "#e74c3c"; // Red for low scores
    else if (score > 7) scoreColor = "#2ecc71"; // Green for high scores

    return {
      width: scoreWidth,
      backgroundColor: scoreColor,
      height: "20px",
      transition: "width 0.3s ease-in-out, background-color 0.3s ease-in-out",
    };
  };

  return (
    <div className="score-panel" >
      <h1>My Score in React</h1>
      <small>Enter a score (0 to 10): </small>
      <input
        type="number"
        min="0"
        max="10"
        value={score}
        onChange={(e) => setScore(Math.min(10, Math.max(0, Number(e.target.value))))}
      />
      <div className="score-bar" style={{ width: "100%", backgroundColor: "#ddd", height: "20px", marginTop: "10px" }}>
        <div className="score-bar-value" style={getScoreBarStyle()}></div>
      </div>
    </div>
  );
}
