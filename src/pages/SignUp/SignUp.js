import React from "react";
import Heading from "../Components/Heading";
import Button from "../Components/Button";
import LabelAndField from "../Components/LabelAndField";

function SignUp() {
  return (
    <div>
      <form>
        <Heading heading="h2">Sign Up</Heading>
        <p>Sign up to get exclusive offers and discounts.</p>
        <LabelAndField htmlFor="name">Name</LabelAndField>
        <LabelAndField htmlFor="email">Email</LabelAndField>
        <LabelAndField htmlFor="password">Password</LabelAndField>
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
}

export default SignUp;
