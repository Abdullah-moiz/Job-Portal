import NavBar from '@/components/NavBar'
import Image from 'next/image'
import React from 'react'
import { GoLocation } from 'react-icons/go'
import { MdCategory } from 'react-icons/md'
import { BsBriefcaseFill } from 'react-icons/bs'
import { AiOutlineDollarCircle } from 'react-icons/ai'

export default function JobDetails() {
    return (
        <>
            <NavBar />
            <div className='w-full  py-20 flex items-center md:px-8 px-2  justify-center flex-col  '>
                <div className='w-full h-40 bg-gray-50 text-indigo-600 font-bold flex items-center justify-center flex-col'>
                    <h1 className='text-3xl'>Job Details</h1>
                </div>
                <div className='flex items-center justify-center w-full py-10'>
                    <div className='flex w-full px-20 items-center justify-between'>
                        <div className='flex items-center justify-center'>
                            <Image src={"/intro.png"} alt="no-image" width={100} height={100} />
                            <div className='px-4 mx-2 flex flex-col items-start justify-center'>
                                <p className='font-semibold text-base mb-1' >Senior Software Engineer </p>
                                <p className='font-semibold text-sm text-gray-800 mb-1'>Company Name</p>
                            </div>
                        </div>
                        <div className='px-4 mx-2 flex flex-col items-start justify-center'>
                            <div className='flex items-center justify-center mb-1'>
                                <GoLocation className='text-xs font-semibold text-indigo-600' />
                                <p className='font-semibold text-base mx-1'>Location </p>
                                <p className='font-semibold text-sm text-gray-800 mx-1'>Rawalipindi</p>
                            </div>
                            <div className='flex items-center justify-center mb-1'>
                                <MdCategory className='text-xs font-semibold text-indigo-600' />
                                <p className='font-semibold text-base mx-1'>Category </p>
                                <p className='font-semibold text-sm text-gray-800 mx-1'>Graphic</p>
                            </div>
                        </div>
                        <div className='px-4 mx-2 flex flex-col items-start justify-center'>
                            <div className='flex items-center justify-center mb-1'>
                                <BsBriefcaseFill className='text-xs font-semibold text-indigo-600' />
                                <p className='font-semibold text-base mx-1'>Job Type </p>
                                <p className='font-semibold text-sm text-gray-800 mx-1'>full time</p>
                            </div>
                            <div className='flex items-center justify-center mb-1'>
                                <AiOutlineDollarCircle className='text-xs font-semibold text-indigo-600' />
                                <p className='font-semibold text-base mx-1'>Salary </p>
                                <p className='font-semibold text-sm text-gray-800 mx-1'>40000 /month</p>
                            </div>
                        </div>
                        <div className='flex items-center justify-center'>
                            <button className='px-6 py-3 bg-indigo-500 rounded text-base tracking-widest uppercase transition-all duration-700 hover:bg-indigo-900 text-white  '>Apply Position</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
