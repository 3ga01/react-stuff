import React from "react";
import "../../../css/input.css";

function Input(props) {
  return (
    <div>
      <input type={props.type} placeholder={props.placeholder} />
    </div>
  );
}

Input.defaultProps = {
  type: "text",
  placeholder: "Default Placeholder",
};

export default Input;
