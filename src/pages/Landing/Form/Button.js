import React from "react";

function Button(props) {
  console.log(props.type);
  return <button type={props.type}>{props.text}</button>;
}

//Assigning Default Props
Button.defaultProps = {
  text: "Default Button",
  type: "submit",
};

export default Button;
