"use client";
import React from "react";
import Input from "./Input";
import Button from "./Button";
import Link from "next/link";
import HeaderTitle from "./HeaderTitle";
import HaveAccountFooter from "./HaveAccountFooter";
import FooterTerms from "./FooterTerms";
import SignInOrUpWithGoogle from "./SignInOrUpWithGoogle";
import { useForm, FieldErrors } from "react-hook-form";
import { signIn, useSession } from "next-auth/react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

interface FormData {
  email: string;
  password: string;
}

const Login = () => {
  const router  = useRouter()
  // validate form
  const form = useForm<FormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "all",
  });

  const { register, handleSubmit, formState } =
    form;

  const { errors, isSubmitting, isSubmitSuccessful } =
    formState;

  // handle form submission
  const onSubmit = async (data: FormData) => {
    try {   
      const res = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: true,
        callbackUrl: "/",
      })
      console.log("this is response from serveer===>", res)
      if (!res?.ok) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: res?.error || "Invalid email or password",
        })
        router.push("/")
        return
      } 
    } catch (error: Error | any) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message || "Error logging in",
      })
      
    }

  
  };

  // handle if already loged in
  const {status, data, update} = useSession()
  if (status === "authenticated") {
    router.push("/")
  }

  // handle google sign in

  return (
    <div className="flex flex-col gap-6 pt-10 pb-24 px-8 mx-auto my-auto max-w-lg bg-white">
      {/* header title */}
      <HeaderTitle title="Welcome Back," />
      <SignInOrUpWithGoogle title="Sign In" />

      {/* form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-5">
          {/* input */}
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
                placeholder="Enter your password"
                {...register("password", {
                  required: "Password is required",
                })}
              />
              <p className="text-red-600">{errors.password?.message}</p>
            </div>
          </div>
          {/* button */}
          <Button disabled={isSubmitting} name="Login" />
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
