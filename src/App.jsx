import React, { useState } from "react";
import "./App.css";

export const App = () => {
  const [points, setPoints] = useState([]);
  const [popped, setPopped] = useState([]);
  const circle = (e) => {
    console.log(e);
    const { clientX, clientY } = e;
    setPoints([
      ...points,
      {
        x: clientX,
        y: clientY,
      },
    ]);
  };

  const handleUndo = () => {
    // TODO: remove the last point added to the array
    const newPoints = [...points];
    const poppedPoint = newPoints.pop();
    setPopped([...popped, poppedPoint]);
    setPoints(newPoints);
  };

  const handleRedo = () => {
    const newPopped = [...popped];
    const poppedPoint = newPopped.pop();
    setPoints([...points, poppedPoint]);
    setPopped(newPopped);
  };

  return (
    <>
      <button disabled={points.length === 0} onClick={handleUndo}>
        Undo
      </button>
      <button disabled={popped.length === 0} onClick={handleRedo}>
        Redo
      </button>
      <div className="App" onClick={circle}>
        {points.map((point, index) => (
          <div
            key={index}
            className="point"
            style={{
              left: point.x - 5 + "px",
              top: point.y - 5 + "px",
            }}
          ></div>
        ))}
      </div>
    </>
  );
};

export default App;
