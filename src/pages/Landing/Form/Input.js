import React from "react";
import "../../../css/input.css";

function Input(props) {
  return (
    <div>
      <input
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  );
}

Input.defaultProps = {
  type: "text",
  placeholder: "Default Placeholder",
  value: "",
  onChange: () => {},
};

export default Input;
