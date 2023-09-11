import React from "react";
import "../../../css/label.css";

function Label(props) {
  return (
    <div>
      <label id={props.id}>{props.text}</label>
    </div>
  );
}

Label.defaultProps = {
  text: "Default Label",
  id: "label",
};

export default Label;
