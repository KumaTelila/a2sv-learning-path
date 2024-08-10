"use client";
import React from "react";
import JobLogo from "./JobLogo";
import Image from "next/image";
import { FcBookmark } from "react-icons/fc";
import { FaHeart } from "react-icons/fa";
import { FaBookBookmark, FaRegHeart } from "react-icons/fa6";
import Link from "next/link";
import { useSession } from "next-auth/react";
const JobsCard = ({
  id,
  title,
  description,
  logoUrl,
  opType,
  location,
  orgName,
}: {
  id: string;
  title: string;
  description: string;
  logoUrl: string;
  opType: string;
  location: string[];
  orgName: string;
}) => {
  const { data: session } = useSession();
  return (
    <div className="flex gap-6 border px-9 py-6 rounded-2xl">
      <div className="w-20 h-fit px-6">
        <Image
          src={logoUrl ? logoUrl : "/profile.jpg"}
          alt=""
          className="rounded-full min-h-12 min-w-12"
          width={100}
          height={100}
        />
      </div>
      <div className="flex flex-col gap-2  font-Epilogue w-full">
        <div className="flex justify-between">
          <Link href={`/description?id=${id}`}>
            <h1 className="text-[#25324B] text-2xl font-bold">{title}</h1>
          </Link>
          {session && session.user ? (
            <div className="flex gap-2">
              <div className="pt-2">
                <FaRegHeart color="#7C8493" />
              </div>
              <button className="text-base font-Epilogue text-[#7C8493]">
                Save this job
              </button>
            </div>
          ) : null}
        </div>
        <div className="flex gap-2">
          <div className="text-base font-Epilogue text-[#7C8493]">
            <h3>{orgName}</h3>
          </div>
          <div>
            <h3 className="w-1 h-1 rounded-full bg-[#7C8493] my-3"></h3>
          </div>
          <div className="text-base font-Epilogue text-[#7C8493]">
            <h3>{location.join(", ")}</h3>
          </div>
        </div>
        <p className="text-[#25324B] font-normal text-[16px]">{description}</p>
        {/* labels */}
        <div className="flex gap-2 bordered">
          <div className="border-2 border-[#56CDAD] rounded-2xl gap-2  text-[#56CDAD]">
            <h4 className="px-2 ">{opType}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsCard;
