import React from "react";
import Button from "./Button";
import "../../../css/formContainer.css";
import Label from "./Label";
import Input from "./Input";
import "../../../css/label.css";

function FormContainer() {
  return (
    <div>
      <form id="container">
        <h2>SIGNUP</h2>
        <Label />
        <Input />
        <Label />
        <Input />
        <Label />
        <Input />
        <Button />
      </form>
    </div>
  );
}

export default FormContainer;
