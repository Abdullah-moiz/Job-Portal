import NavBar from '@/components/NavBar'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { get_job } from '@/Services/job'
import { setJobData } from '@/Utils/JobSlice'
import { InfinitySpin } from 'react-loader-spinner'
import JobsCard from '@/components/JobsCard'
import { toast } from 'react-toastify'
import useSWR from 'swr'




export default function DisplayJobs() {
    const dispatch = useDispatch();
    const router = useRouter();


    const { data, error, isLoading } = useSWR('/getAllJobs', get_job, { refreshInterval: 1000 })
    
    useEffect(() => {
        if(data) dispatch(setJobData(data?.data))
    }, [data , dispatch])



    const JobData = useSelector(state => state?.Job?.JobData) || [];
    
    console.log(JobData)
    return (

        <>
            {
                isLoading ? (
                    <div className='bg-gray w-full h-screen flex items-center flex-col justify-center'>
                        <InfinitySpin width='200' color="#4f46e5" />
                        <p className='text-xs uppercase'>Loading Resources Hold Tight...</p>
                    </div>
                ) : (
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
        </>
    )
}
