import React, { useState } from "react";
import Button from "./Button";
import "../../../css/formContainer.css";
import Label from "./Label";
import Input from "./Input";
import "../../../css/label.css";

function FormContainer() {
  const validPhone = /^\d{1,10}$/;
  const [phone, setPhone] = useState("");

  const handleChange = ({ target }) => {
    const newPhone = target.value;

    const isValid = validPhone.test(newPhone);

    if (isValid || newPhone === "") {
      setPhone(newPhone);
      console.log(isValid);
    }
  };

  return (
    <div id="container">
      <form>
        <h2>SIGNUP</h2>
        <div className="box">
          <Label text="Phone" />
          <Input
            onChange={handleChange}
            type="email"
            placeholder="0241339963"
            value={phone}
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
  console.log(phone);
}

export default FormContainer;
