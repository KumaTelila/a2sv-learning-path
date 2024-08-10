import Link from "next/link";
import React from "react";

const HaveAccountFooter = ({text, linkText, path}: {text: string, linkText: string, path: string}) => {
  return (
    <div className="flex gap-2">
      <div>
        <h1 className="text-[#202430b7] font-Epilogue text-[16px]">
          {text}
        </h1>
      </div>
      <div>
        <Link
          href={path}
          className="text-[#4640DE] font-semibold text-4"
        >
          {linkText}
        </Link>
      </div>
    </div>
  );
};

export default HaveAccountFooter;
