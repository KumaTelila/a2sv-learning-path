"use client";
import React from "react";
import HeaderTitle from "./HeaderTitle";
import Button from "./Button";
import HaveAccountFooter from "./HaveAccountFooter";
import FooterTerms from "./FooterTerms";
import SignInOrUpWithGoogle from "./SignInOrUpWithGoogle";
import { useForm, FieldErrors } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Register = () => {
// validate form
const form = useForm<FormData>({
  defaultValues: {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  },
  mode: "all",
});

const {register, handleSubmit, formState} = form;
const {errors, isSubmitting, isSubmitSuccessful} = formState;

// handle form submission
const onSubmit = (data: FormData) => {
  console.log(data);
};


  return (
    <div className="flex flex-col gap-6 pt-6 pb-24 px-8 mx-auto my-auto max-w-lg bg-white ">
      {/* header title */}
      <HeaderTitle title="Sign Up Today!" />
      {/* sign in with google button */}
      <SignInOrUpWithGoogle title="Sign Up" />
      {/* form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-5">
          {/* input */}

          <div className="flex flex-col gap-1">
            <div className="font-Epilogue text-[#515B6F] text-[16px]font-semibold">
              <label htmlFor="">Full Name</label>
            </div>
            <div className="">
              <input
                className="input input-bordered w-full border-[#D6DDEB]"
                type="text"
                placeholder="Enter your full name"
                {...register("name", { required: "Name is required" })}
              />
              <p className="text-red-600">{errors.name?.message}</p>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="font-Epilogue text-[#515B6F] text-[16px]font-semibold">
              <label htmlFor="">Email</label>
            </div>
            <div className="">
              <input
                className="input input-bordered w-full border-[#D6DDEB]"
                type="email"
                placeholder="Enter your email"
                {...register("email", { required: "Email is required" })}
              />
              <p className="text-red-600">{errors.email?.message}</p>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <div className="font-Epilogue text-[#515B6F] text-[16px]font-semibold">
              <label htmlFor="">Password</label>
            </div>
            <div className="">
              <input
                className="input input-bordered w-full border-[#D6DDEB]"
                type="password"
                placeholder="Enter password"
                {...register("password", { required: "Password is required" })}
              />
              <p className="text-red-600">{errors.password?.message}</p>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <div className="font-Epilogue text-[#515B6F] text-[16px]font-semibold">
              <label htmlFor="">Confirm Password</label>
            </div>
            <div className="">
              <input
                className="input input-bordered w-full border-[#D6DDEB]"
                type="password"
                placeholder="Confirm password"
                {...register("confirmPassword", { required: "Password is required" })}
              />
              <p className="text-red-600">{errors.confirmPassword?.message}</p>
            </div>
          </div>
          {/* button */}
          <Button disabled={isSubmitting} name="Continue" />
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
