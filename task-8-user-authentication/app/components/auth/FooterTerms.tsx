import Link from "next/link";
import React from "react";

const FooterTerms = () => {
  return (
    <h3 className="text-[14px] font-Epilogue">
      By clicking 'Continue', you acknowledge that you have read and accepted
      our{" "}
      <Link className="text-[#4640DE]" href={"#"}>
        Terms of Service
      </Link>{" "}
      and{" "}
      <Link className="text-[#4640DE]" href={"#"}>
        Privacy Policy
      </Link>
      .
    </h3>
  );
};

export default FooterTerms;
