import React from "react";
import Button from "../CounterComponents/CouterButton";
import { buttonValues } from "../../data";

const ColorPicker = () => {
  return (
    <div>
      <p>
        {" Color:"}
        <span className="picker_choice"></span>
      </p>

      <div className="button_container">
        {buttonValues.map((item) => {
          return <Button buttonText={item.value} />;
        })}
      </div>
    </div>
  );
};
export default ColorPicker;
