import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [currentActive, setCurrentActive] = useState(1);
  const steps = [1, 2, 3, 4];

  return (
    <div className="container">
      <div className="progress-container">
        <div
          className="progress"
          style={{ width: `${((currentActive - 1) / 3) * 100}%` }}
        ></div>
        {steps.map((num) => (
          <div
            className={`circle ${num <= currentActive ? "active" : ""}`}
            key={num}
            onClick={() => setCurrentActive(num)}
          >
            {num}
          </div>
        ))}
      </div>
      <button
        className="btn"
        id="prev"
        disabled={currentActive === steps[0]}
        onClick={() => setCurrentActive(currentActive - 1)}
      >
        Prev
      </button>
      <button
        className="btn"
        id="next"
        disabled={currentActive === steps[steps.length - 1]}
        onClick={() => setCurrentActive(currentActive + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default App;
