import React from "react";

const Input = ({ label, placeholder }: { label: string; placeholder: string }) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="font-Epilogue text-[#515B6F] text-[16px]font-semibold">
        <label htmlFor="">{label}</label>
      </div>
      <div className="">
        <input
          className="input input-bordered w-full border-[#D6DDEB]"
          type="text"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default Input;
