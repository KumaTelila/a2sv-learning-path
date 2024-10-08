"use client";
import React from "react";
import JobsCard from "./JobsCard";
import Header from "./Header";
import Link from "next/link";
import { JobPosting } from "../../interface/interfaces";
import { useGetAllJobsQuery } from "../../lib/features/jobSlice";

const MainPage = () => {
  const { data, isError, isLoading } = useGetAllJobsQuery('queryKey');
  const jobs: JobPosting[] = data?.data;
  // console.log(jobs)

  if (isError) {
    return <div>Error</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-10 py-16 px-16 max-md:px-3">
      <Header number_of_jobs={jobs.length} />
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

export default MainPage;
