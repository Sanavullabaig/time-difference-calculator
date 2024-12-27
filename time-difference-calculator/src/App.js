import React, { useState } from "react";
import "./App.css";

function App() {
  const [startDateTime, setStartDateTime] = useState("");
  const [endDateTime, setEndDateTime] = useState("");
  const [result, setResult] = useState("");

  const calculateDifference = () => {
    if (!startDateTime || !endDateTime) {
      setResult("Please fill in both date-time fields.");
      return;
    }

    const start = new Date(startDateTime);
    const end = new Date(endDateTime);

    if (end < start) {
      setResult("End date-time must be after start date-time.");
      return;
    }

    const diff = end - start;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    setResult(
      `The time difference is ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds.`
    );
  };

  return (
    <div className="App">
      <h1>Time Difference Calculator</h1>
      <div>
        <p>Enter Start Date and Time:</p>
        <input
          type="datetime-local"
          value={startDateTime}
          onChange={(e) => setStartDateTime(e.target.value)}
        />
      </div>
      <div>
        <p>Enter End Date and Time:</p>
        <input
          type="datetime-local"
          value={endDateTime}
          onChange={(e) => setEndDateTime(e.target.value)}
        />
      </div>
      <button onClick={calculateDifference}>Calculate</button>
      <div className="result">{result}</div>
    </div>
  );
}

export default App;
