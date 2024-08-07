import React from "react";
import Input from "./Input";
import Button from "./Button";
import Link from "next/link";
import HeaderTitle from "./HeaderTitle";
import HaveAccountFooter from "./HaveAccountFooter";
import FooterTerms from "./FooterTerms";
import SignInOrUpWithGoogle from "./SignInOrUpWithGoogle";

const Login = () => {
  return (
    <div className="flex flex-col gap-6 pt-10 pb-24 px-8 mx-auto my-auto max-w-lg bg-white">
      {/* header title */}
      <HeaderTitle title="Welcome Back," />
      <SignInOrUpWithGoogle title="Sign In" />

      {/* form */}
      <form action="">
        <div className="flex flex-col gap-5">
          {/* input */}
          <Input label="Email" placeholder="Enter your email" />
          <Input label="Password" placeholder="Enter your password" />
          {/* button */}
          <Button name="Login" />
        </div>
      </form>
      {/* footer of form */}
      <HaveAccountFooter
        text="Don't have an account?"
        linkText="Sign Up"
        path="/auth/register"
      />
      {/* footer terms of service */}
      <FooterTerms />
    </div>
  );
};

export default Login;
