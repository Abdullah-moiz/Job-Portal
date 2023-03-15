import NavBar from '@/components/NavBar'
import Image from 'next/image'
import React from 'react'

export default function JobDetails() {
    return (
        <>
            <NavBar />
            <div className='w-full  py-20 flex items-center md:px-8 px-2  justify-center flex-col  '>
                <div className='w-full h-40 bg-gray-50 text-indigo-600 font-bold flex items-center justify-center flex-col'>
                    <h1 className='text-3xl'>Job Details</h1>
                </div>
                <div className='flex items-center justify-center w-full py-10'>
                    <div className='flex w-full px-20 flex-col items-start justify-center'>
                        <Image src={"/intro.png"} alt="no-image" width={100} height={100}/>
                        <div className='px-4 mx-2 flex flex-col items-center justify-center'>
                            <p>Senior Software Engineer </p>
                            <p>Company Name</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
