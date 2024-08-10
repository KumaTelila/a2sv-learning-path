import React from "react";

const HeaderTitle = ({ title }: { title: string }) => {
  return (
    <div className="text-[32px] font-Poppins font-black grid justify-items-center">
      <h1>{title}</h1>
    </div>
  );
};

export default HeaderTitle;
