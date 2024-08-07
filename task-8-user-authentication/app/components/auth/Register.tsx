import React from "react";
import HeaderTitle from "./HeaderTitle";
import Input from "./Input";
import Button from "./Button";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { Epilogue } from "next/font/google";
import HaveAccountFooter from "./HaveAccountFooter";
import FooterTerms from "./FooterTerms";
import SignInOrUpWithGoogle from "./SignInOrUpWithGoogle";
const ep = Epilogue({ subsets: ["latin"] });

const Register = () => {
  return (
    <div className="flex flex-col gap-6 pt-6 pb-24 px-8 mx-auto my-auto max-w-lg bg-white ">
      {/* header title */}
      <HeaderTitle title="Sign Up Today!" />
      {/* sign in with google button */}
      <SignInOrUpWithGoogle title="Sign Up" />
      {/* form */}
      <form action="">
        <div className="flex flex-col gap-5">
          {/* input */}
          <Input label="Full Name" placeholder="Enter your full name" />
          <Input label="Email Address" placeholder="Enter email address" />
          <Input label="Password" placeholder="Enter password" />
          <Input label="Confirm Password" placeholder="Confirm password" />
          {/* button */}
          <Button name="Continue" />
        </div>
      </form>
      {/* footer of form  */}
      <HaveAccountFooter
        text="Already have an account?"
        linkText="Login"
        path="/auth/login"
      />
      {/* footer terms of service */}
      <FooterTerms />
    </div>
  );
};

export default Register;
