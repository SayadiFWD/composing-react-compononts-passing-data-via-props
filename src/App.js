import React, { useState } from "react";
import Counter from "./components/CounterComponents/Couter";
import ColorPicker from "./components/ColorComponents/ColorButtons";

import "./styles.css";

function App() {
  return (
    <div className="counter">
      <Counter />
      <ColorPicker />
    </div>
  );
}

export default App;
