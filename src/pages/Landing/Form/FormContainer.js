import React, { useState } from "react";
import Button from "./Button";
import "../../../css/formContainer.css";
import Label from "./Label";
import Input from "./Input";
import "../../../css/label.css";

function FormContainer() {
  const validEmail = /^\d{1,10}$/;
  const [email, setEmail] = useState("");

  const handleChange = ({ target }) => {
    const newEmail = target.value;

    const isValid = validEmail.test(newEmail);

    if (isValid || newEmail === "") {
      setEmail(newEmail);
    }
  };

  return (
    <div id="container">
      <form>
        <h2>SIGNUP</h2>
        <div className="box">
          <Label text="Email" />
          <Input
            onChange={handleChange}
            type="email"
            placeholder="example@email.com"
            value={email}
          />
        </div>
        <div className="box">
          <Label text="Password" />
          <Input placeholder="********" />
        </div>
        <Button text="submit" />
      </form>
    </div>
  );
  console.log(email);
}

export default FormContainer;
