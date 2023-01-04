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
    setDisabled(e.target.checked);
  }

  return (
    <div>
      <button
        disabled={disabled}
        onClick={clickedButtonHandler}
        style={{ backgroundColor: disabled ? "gray" : buttonColor }}
      >
        Change to {newButtonColor}
      </button>
      <input
        type="checkbox"
        onChange={clickedCheckBoxHandler}
        defaultChecked={disabled}
        id="disable-button-checkbox"
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
