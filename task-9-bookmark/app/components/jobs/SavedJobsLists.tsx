"use client";
import React from "react";
import SavedJobsHeader from "./SavedJobsHeader";
import JobsCard from "./JobsCard";
import { JobPosting } from "@/app/interface/interfaces";
import { useGetAllJobsQuery } from "@/app/lib/features/jobSlice";

const SavedJobsLists = () => {
  const { data, isError, isLoading } = useGetAllJobsQuery();
  const jobs: JobPosting[] = data?.data;
  // console.log(jobs)

  if (isError) {
    return <div>Error</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex flex-col gap-10 pt-[72px] pl-[124px] pr-[123px] pb-[72px]">
      <SavedJobsHeader/>
      <div className="flex flex-col gap-10">
        {jobs.map((job, index) => (
          // <Link key={index} href={`/description?id=${job.id}`}>
            <JobsCard key={index}
              id={job.id}
              title={job.title}
              description={job.description}
              logoUrl={job.logoUrl}
              opType={job.opType}
              location={job.location}
              orgName={job.orgName}
              categories = {job.categories}
            />
          // </Link>
        ))}
      </div>
    </div>
  );
};

export default SavedJobsLists;
