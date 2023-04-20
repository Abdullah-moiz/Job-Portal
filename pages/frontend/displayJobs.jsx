import NavBar from '@/components/NavBar'
import React from 'react'
import {  useSelector } from 'react-redux'

import JobsCard from '@/components/JobsCard'





export default function DisplayJobs() {
    const JobData = useSelector(state => state?.Job?.JobData) || [];
    return (

        <>

            <NavBar />
            <div className='w-full  py-20 flex items-center md:px-8 px-2  justify-center flex-col'>
                <h1 className='px-4 mx-2 py-2 uppercase tracking-wider border-b-2 border-b-indigo-600 text-3xl font-semibold'>Available Jobs</h1>
                <div className='w-full h-full py-4 flex  overflow-y-auto  items-center justify-center flex-wrap'>
                    {/* map */}
                    {
                        Array.isArray(JobData) && JobData.length > 0 ? JobData?.map((job) => {
                            return (
                                <JobsCard job={job} key={job?._id} />
                            )
                        }) : <p>No jobs found</p>
                    }

                    {/* map */}
                </div>
            </div>
        </>

    )
}
