import React from "react";
import { FcGoogle } from "react-icons/fc";

const SignInOrUpWithGoogle = ({title}: {title: string}) => {
  return (
    <>
      <button className="btn bg-white gap-[10px] justify-items-center">
        <FcGoogle size={25} />
        <h3 className={`font-bold font-Epilogue text-[16px] text-[#4640DE]`}>
          {title} with Google
        </h3>
      </button>
      {/* text for manual sign up */}
      <div className="flex justify-center items-center gap-4">
        <div className="flex-1 flex h-[1px] bg-[#D6DDEB]"></div>
        <h1 className=" flex-2 flex text-center text-[16px] text-[#2024308c] font-normal">
          Or {title} with Email
        </h1>
        <div className="flex-1 flex h-[1px] bg-[#D6DDEB]"></div>
      </div>
    </>
  );
};

export default SignInOrUpWithGoogle;
