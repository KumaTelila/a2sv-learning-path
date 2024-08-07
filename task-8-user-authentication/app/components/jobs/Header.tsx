import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const Header = ({ number_of_jobs }: { number_of_jobs: number }) => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-1">
        <div className="text-[32px] font-Poppins font-black">
          <h1>Opportunities</h1>
        </div>
        <div className="text-base font-Epilogue text-[#7C8493]">
          <h3>Showing {number_of_jobs} results</h3>
        </div>
      </div>
      <div className="flex gap-5">
        <div className="text-base font-Epilogue text-[#7C8493]">
          <h3>Sort by:</h3>
        </div>
        <div className="flex gap-2">
          <div className="text-base font-Epilogue text-[#25324B] font-medium bg-white">
            <select className="bg-white">
              <option value="">Most relevant</option>
              <option value="">Most Oldest</option>
              <option value="">Most New</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
