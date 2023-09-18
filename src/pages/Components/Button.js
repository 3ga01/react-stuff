import react from "react";

function Button(props) {
  const type = props.type;

  if (type === "submit") {
    return <button type="submit">{props.children}</button>;
  } else if (type === "reset") {
    return <button type="button">{props.children}</button>;
  }
}

export default Button;
