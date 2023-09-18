import React from "react";

function Heading(props) {
  const heading = props.heading;
  if (heading === "h1") {
    return <h1>{props.children}</h1>;
  } else if (heading === "h2") {
    return <h2>{props.children}</h2>;
  } else if (heading === "h3") {
    return <h2>{props.children}</h2>;
  } else if (heading === "h4") {
    return <h2>{props.children}</h2>;
  } else if (heading === "h5") {
    return <h2>{props.children}</h2>;
  } else if (heading === "h6") {
    return <h2>{props.children}</h2>;
  }
}

export default Heading;
