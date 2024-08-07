import React from "react";

const Button = ({name}: {name: string}) => {
  return (
    <button className="btn bg-[#4640DE] rounded-3xl w-full text-white font-Epilogue font-bold">
      {name}
    </button>
  );
};

export default Button;
