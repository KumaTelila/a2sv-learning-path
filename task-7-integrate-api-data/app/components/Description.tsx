"use client";

import React from "react";
import { FaFireAlt, FaRegCalendarAlt } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { LuPlusCircle } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";
import { useGetJobByIdQuery } from "../lib/features/jobSlice";
import { JobPosting } from "../interface/interfaces";

const Description = () => {
  const queryId = new URLSearchParams(window.location.search).get("id");
  const { data, isError, isLoading } = useGetJobByIdQuery(queryId);

  if (isError) {
    return <div>Error</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Destructuring data object
  const {
    description,
    responsibilities,
    idealCandidate,
    whenAndWhere,
    datePosted,
    deadline,
    location,
    startDate,
    endDate,
    categories,
    requiredSkills,
  }: JobPosting = data.data;

  return (
    <div className="flex p-8 justify-between">
      <div className="flex flex-col gap-14 w-[75%]">
        <div className="flex flex-col gap-4">
          <div className="text-[24px] font-Poppins font-black">
            <h1>Description</h1>
          </div>
          <div className="text-[16px] font-Epilogue font-normal">
            <p>{description}</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-[24px] font-Poppins font-black">
            <h1>Responsibilities</h1>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <div className="w-5 h-5">
                <IoCheckmarkCircleOutline color="#56CDAD" size={20} />
              </div>
              <div className="text-[16px] font-Epilogue font-normal">
                <p>{responsibilities}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-[24px] font-Poppins font-black">
            <h1>Ideal Candidates We Want</h1>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <div className="text-[16px] font-Epilogue font-normal">
                <ul className="list-disc">
                  <li className="font-bold">Age: " "</li>
                  <li className="font-bold">Gender: " "</li>
                  <li>{idealCandidate}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="text-[24px] font-Poppins font-black">
            <h1>When & Where</h1>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-2">
              <div className="w-11 h-11 p-2 rounded-full gap-2 border border-[#D6DDEB] justify-center">
                <SlLocationPin color="#26A4FF" size={24} />
              </div>
              <div className="text-[16px] font-Epilogue font-normal pt-3">
                <p>{whenAndWhere}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ml-16 w-[25%] items-center">
        <div className="flex flex-col gap-5">
          <div className="text-[24px] font-Poppins font-black">
            <h1>About</h1>
          </div>
          <div className="flex flex-col">
            <div className="flex gap-4">
              <div className="w-11 h-11 p-2 rounded-full gap-2 border border-[#D6DDEB] justify-center">
                <LuPlusCircle color="#26A4FF" size={24} />
              </div>
              <div className="flex flex-col">
                <div className="text-base font-Epilogue text-[#515B6F] font-normal">
                  <h3>Posted On</h3>
                </div>
                <div className="text-base font-Epilogue text-[#25324B] font-semibold">
                  <h3>{datePosted}</h3>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-11 h-11 p-2 rounded-full gap-2 border border-[#D6DDEB] justify-center">
                <FaFireAlt color="#26A4FF" size={24} />
              </div>
              <div className="flex flex-col">
                <div className="text-base font-Epilogue text-[#515B6F] font-normal">
                  <h3>Deadline</h3>
                </div>
                <div className="text-base font-Epilogue text-[#25324B] font-semibold">
                  <h3>{deadline}</h3>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-11 h-11 p-2 rounded-full gap-2 border border-[#D6DDEB] justify-center">
                <SlLocationPin color="#26A4FF" size={24} />
              </div>
              <div className="flex flex-col">
                <div className="text-base font-Epilogue text-[#515B6F] font-normal">
                  <h3>Location</h3>
                </div>
                <div className="text-base font-Epilogue text-[#25324B] font-semibold">
                  <h3>{location.join(", ")}</h3>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-11 h-11 p-2 rounded-full gap-2 border border-[#D6DDEB] justify-center">
                <FaRegCalendarAlt color="#26A4FF" size={24} />
              </div>
              <div className="flex flex-col">
                <div className="text-base font-Epilogue text-[#515B6F] font-normal">
                  <h3>Start Date</h3>
                </div>
                <div className="text-base font-Epilogue text-[#25324B] font-semibold">
                  <h3>{startDate}</h3>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-11 h-11 p-2 rounded-full gap-2 border border-[#D6DDEB] justify-center">
                <FaRegCalendarCheck color="#26A4FF" size={24} />
              </div>
              <div className="flex flex-col">
                <div className="text-base font-Epilogue text-[#515B6F] font-normal">
                  <h3>End Date</h3>
                </div>
                <div className="text-base font-Epilogue text-[#25324B] font-semibold">
                  <h3>{endDate}</h3>
                </div>
              </div>
            </div>
            <hr />
            <div className="flex flex-col gap-6">
              <div className="text-[24px] font-Poppins font-black">
                <h1>Categories</h1>
              </div>
              <div className="flex gap-2">
                {categories.map((category, index) => (
                  <div
                    key={index}
                    className="bg-[#eb86332a] rounded-[80px] gap-2 pl-2 pt-3 pr-2 pb-3"
                  >
                    <div className="text-sm font-semibold text-[#FFB836] font-Epilogue">
                      <h4>{category}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <hr />
            <div className="flex flex-col gap-6">
              <div className="text-[24px] font-Poppins font-black">
                <h1>Required Skills</h1>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {requiredSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-[#4540de10] gap-4 pl-2 pt-3 pr-2 pb-3"
                  >
                    <div className="text-sm font-normal text-[#4640DE] font-Epilogue">
                      <h4>{skill}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
