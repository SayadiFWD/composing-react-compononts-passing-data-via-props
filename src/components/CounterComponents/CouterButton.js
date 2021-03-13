import React from "react";

const CounterButton = (props) => {
  return (
    <button className="button" onClick={props.clickHander}>
      {props.buttonText}
    </button>
  );
};

export default CounterButton;
