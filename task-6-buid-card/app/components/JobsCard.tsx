import React from "react";
import JobLogo from "./JobLogo";
import Image from "next/image";
import profile from "../../public/profile.jpg";
const JobsCard = () => {
  return (
    <div className="flex gap-6 border px-9 py-6 rounded-2xl">
      <div className="w-20 h-fit px-6">
        <Image
          src={profile}
          alt=""
          className="rounded-full min-h-12 min-w-12"
        />
      </div>
      <div className="flex flex-col gap-2  font-Epilogue">
        <h1 className="text-[#25324B] text-2xl font-bold">
          Social Media Assistant
        </h1>
        <div className="flex gap-2">
          <div className='text-base font-Epilogue text-[#7C8493]'>
            <h3>Young Men Christians Association</h3>
          </div>
          <div>
            <h3 className="w-1 h-1 rounded-full bg-[#7C8493] my-3"></h3>
          </div>
          <div className='text-base font-Epilogue text-[#7C8493]'>
            <h3>Addis Ababa, Ethiopia</h3>
          </div>
        </div>
        <p className="text-[#25324B] font-normal text-[16px]">
          As a Social Media Assistant, you will work closely with the social
          media manager or marketing team to execute social media strategies and
          campaigns. You will be responsible for assisting in the creation and
          scheduling of engaging content, monitoring social media channels, and
          interacting with followers.
        </p>
        {/* labels */}
        <div className="flex gap-2 bordered">
          <div className="justify-center border-2 border-[#56CDAD] rounded-2xl gap-2  text-[#56CDAD]">
            <h4 className="px-2">In person</h4>
          </div>
          <div className=" border-2 border-[#FFB836] rounded-2xl gap-2 text-[#FFB836]">
            <h4 className="px-2">Education</h4>
          </div>
          <div className=" border-2 border-[#4640DE] rounded-2xl gap-2 text-[#4640DE]">
            <h4 className="px-2">IT</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsCard;
