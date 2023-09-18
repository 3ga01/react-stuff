import React from "react";
import Heading from "../Components/Heading";
import Button from "../Components/Button";
import LabelAndField from "../Components/LabelAndField";

function Login() {
  return (
    <div>
      <form>
        <Heading heading="h2">Login</Heading>
        <p>Login to get acess </p>
        <LabelAndField htmlFor="email">Email</LabelAndField>
        <LabelAndField htmlFor="password">Password</LabelAndField>
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
}

export default Login;
