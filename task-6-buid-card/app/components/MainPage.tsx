import React from 'react'
import JobsCard from './JobsCard'
import Header from './Header'

const MainPage = () => {
  return (
    <div className="flex flex-col gap-10 pt-[72px] pl-[124px] pr-[123px] pb-[72px]">
        <Header/>
        <JobsCard/>
        <JobsCard/>
        <JobsCard/>
        <JobsCard/>
    </div>
  )
}

export default MainPage