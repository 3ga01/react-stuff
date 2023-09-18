import React from "react";

function LabelAndField(props) {
  return (
    <div>
      <label htmlFor={props.htmlFor}>{props.children}</label>
      <input type={props.type} id={props.id} name={props.name} />
    </div>
  );
}

export default LabelAndField;
