"use client";
import React, { useState } from "react";
import FooterTerms from "./FooterTerms";
import HeaderTitle from "./HeaderTitle";
import Link from "next/link";
import Button from "./Button";

const Otp = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleChange = (e, index) => {
    const { value } = e.target;
    const newOtp = [...otp];
    newOtp[index] = value;

    if (value !== "" && index < 3) {
      const nextInput = document.querySelector(
        `input[data-index='${index + 1}']`
      );
      if (nextInput) nextInput.focus();
    }

    setOtp(newOtp);
  };

  return (
    <div className="flex flex-col gap-6 pt-24 pb-24 px-8 mx-auto my-auto max-w-lg bg-white rounded-lg shadow-md">
      {/* Header Title */}
      <HeaderTitle title="Verify Email" />
      <p className="text-gray-600 font-normal text-sm">
        We've sent a verification code to the email address you provided. To
        complete the verification process, please enter the code here.
      </p>

      {/* OTP Inputs */}
      <div className="flex gap-[35px] justify-center pt-8">
        {otp.map((value, index) => (
          <input
          placeholder="0"
            key={index}
            type="text"
            value={value}
            onChange={(e) => handleChange(e, index)}
            maxLength="1"
            className="text-[#D6DDEB] text-[34px] border-2 border-[#4540de83] w-[76px] h-12 text-center rounded-md bg-[#F8F8FD]"
            data-index={index}
            aria-label={`OTP digit ${index + 1}`}
          />
        ))}
      </div>

      {/* Resend Code Timer */}
      <div className="flex flex-col items-center mt-4">
        <p>
          You can resend the code in{" "}
          <Link href="/" className="text-blue-600 font-semibold">
            Resend code
          </Link>
        </p>
        <h3 className="text-blue-600 font-semibold text-sm">00:59</h3>
      </div>

      {/* Continue Button */}
      <Button name="Continue" />
    </div>
  );
};

export default Otp;
