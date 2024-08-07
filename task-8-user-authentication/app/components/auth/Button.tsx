import React from "react";

const Button = ({name, disabled}: {name: string, disabled: boolean}) => {
  return (
    <button disabled={disabled} type="submit" className="btn bg-[#4640DE] rounded-3xl w-full text-white font-Epilogue font-bold">
      {name}
    </button>
  );
};

export default Button;
