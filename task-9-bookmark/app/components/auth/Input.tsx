import React from "react";

const Input = ({ label, placeholder, type, name }: { label: string; placeholder: string, type: string, name: string }) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="font-Epilogue text-[#515B6F] text-[16px]font-semibold">
        <label htmlFor="">{label}</label>
      </div>
      <div className="">
        <input
        name={name}
          className="input input-bordered w-full border-[#D6DDEB]"
          type={type}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default Input;
