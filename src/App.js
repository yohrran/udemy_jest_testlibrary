import { useState } from "react";
import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const [disabled, setDisabled] = useState(false);
  const newButtonColor = buttonColor === "red" ? "blue" : "red";

  function clickedButtonHandler() {
    setButtonColor(newButtonColor);
  }

  function clickedCheckBoxHandler(e) {
    console.log(e.target.checked);
    setDisabled(e.target.checked);
  }

  return (
    <div>
      <button
        disabled={disabled}
        onClick={clickedButtonHandler}
        style={{ backgroundColor: buttonColor }}
      >
        Change to {newButtonColor}
      </button>
      <input type="checkbox" onChange={clickedCheckBoxHandler} />
    </div>
  );
}

export default App;
