import React from 'react'
import JobsCard from './JobsCard'
import Header from './Header'
import Link from 'next/link'
import { Jobs } from '../services/interfaces'

const MainPage = () => {
  const dummy_data = require("../../data.json");
  const jobs: Jobs[] = dummy_data.job_postings;

  return (
    <div className="flex flex-col gap-10 pt-[72px] pl-[124px] pr-[123px] pb-[72px]">
      <Header number_of_jobs={jobs.length}/>
      <div className="flex flex-col gap-10">
        {
          jobs.map((job, index) => ( 
            <Link key={index} href={`/description?id=${index+1}`}><JobsCard title = {job.title} description = {job.description}/></Link>
          ))
        }
      </div>
    </div>
  )
}

export default MainPage