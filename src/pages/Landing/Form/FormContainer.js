import React from "react";
import Button from "./Button";

function FormContainer() {
  return (
    <div>
      <form>
        <h2>SignUp</h2>
        <label>Email</label>
        <input placeholder="Email" />
        <label>Password</label>
        <input placeholder="Password" />
        <Button/>
      </form>
    </div>
  );
}

export default FormContainer;