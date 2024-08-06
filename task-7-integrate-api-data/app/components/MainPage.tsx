"use client";
import React from "react";
import JobsCard from "./JobsCard";
import Header from "./Header";
import Link from "next/link";
import { JobPosting } from "../interface/interfaces";
import { useGetAllJobsQuery } from "../lib/features/jobSlice";

const MainPage = () => {
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
      <Header number_of_jobs={jobs.length} />
      <div className="flex flex-col gap-10">
        {jobs.map((job, index) => (
          <Link key={index} href={`/description?id=${job.id}`}>
            <JobsCard
              title={job.title}
              description={job.description}
              logoUrl={job.logoUrl}
              opType={job.opType}
              location={job.location}
              orgName={job.orgName}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
