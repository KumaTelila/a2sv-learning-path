"use client";
import React from "react";
import SavedJobsHeader from "./SavedJobsHeader";
import JobsCard from "./JobsCard";
import { JobPosting } from "@/app/interface/interfaces";
import { useGetBookmarksQuery } from "@/app/lib/features/jobSlice";
import { useSession } from "next-auth/react";
import Link from "next/link";

interface SavedJobs {
  title: string;
  eventID: string;
}

const SavedJobsLists = () => {
  const session = useSession();
  const accessToken = session.data?.accessToken;
  const { data, isError, isLoading } = useGetBookmarksQuery(accessToken);
  console.log(data);
  // console.log(jobs)
  const savedJobs: SavedJobs[] = data?.data;

  if (isError) {
    return <div>Error</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex flex-col gap-10 pt-[72px] pl-[124px] pr-[123px] pb-[72px]">
      <SavedJobsHeader number_of_jobs={10} />
      <div className="flex flex-col gap-10">
        <div className="flex flex-col justify-between gap-4">
          {savedJobs.map((job, index) => (
            <Link key={index} href={`/description?id=${job.eventID}`}>
              <div className="flex gap-2">
              <h1 className="text-[#25324B] text-2xl font-bold">{index+1}</h1>
              <h1 className="text-[#25324B] text-2xl font-bold">{job.title}</h1>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SavedJobsLists;
