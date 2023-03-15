import NavBar from '@/components/NavBar'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { GoLocation } from 'react-icons/go'
import { MdCategory, MdEmail } from 'react-icons/md'
import { BsBriefcaseFill } from 'react-icons/bs'
import { AiOutlineArrowRight, AiOutlineDollarCircle } from 'react-icons/ai'
import { RiUserSearchFill } from 'react-icons/ri'
import { BsFillCalendar2DateFill } from 'react-icons/bs'
import { HiOutlineStar } from 'react-icons/hi'
import { FaUserAstronaut } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { setMatchingJobDat } from '@/Utils/JobSlice'
import { get_specified_job } from '@/Services/job'
import { toast, ToastContainer } from 'react-toastify'



export default function JobDetails() {
    const router = useRouter()
    const dispatch = useDispatch();
    const { id } = router.query
    const JobData = useSelector(state => state?.Job?.JobData)
    const [JobDetails, setJobDetails] = useState(null);

    const matchingJob = useSelector(state => state?.Job?.matchingData)

    console.log(matchingJob)
    useEffect(() => {
        (async () => {
            JobData?.filter((item) => {
                console
                if (item?.job_category == JobDetails?.job_category) {
                    dispatch(setMatchingJobDat(...item))
                }
            })

        })()
    },[])


    useEffect(() => {
        (async () => {
            const res = await get_specified_job(id);
            if(res.success) setJobDetails(res.data)
            else toast.error(res.message)
        }
        )()
    }, [])

    return (
        <>
            <ToastContainer />
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
                                <p className=' text-sm text-gray-800 mb-1'>Company Name</p>
                            </div>

                        </div>
                        <div className='px-4 mx-2 flex flex-col items-start justify-center'>
                            <div className='flex items-center justify-center mb-1'>
                                <FaUserAstronaut className='text-xs font-semibold text-indigo-600' />
                                <p className='font-semibold text-base mx-1'>Job Poster </p>
                                <p className=' text-sm text-gray-800 mx-1'>pak</p>
                            </div>
                            <div className='flex items-center justify-center mb-1'>
                                <MdEmail className='text-xs font-semibold text-indigo-600' />
                                <p className='font-semibold text-base mx-1'>Email </p>
                                <p className=' text-sm text-gray-800 mx-1'>ok@ok.com</p>
                            </div>
                        </div>
                        <div className='px-4 mx-2 flex flex-col items-start justify-center'>
                            <div className='flex items-center justify-center mb-1'>
                                <GoLocation className='text-xs font-semibold text-indigo-600' />
                                <p className='font-semibold text-base mx-1'>Location </p>
                                <p className=' text-sm text-gray-800 mx-1'>Rawalipindi</p>
                            </div>
                            <div className='flex items-center justify-center mb-1'>
                                <MdCategory className='text-xs font-semibold text-indigo-600' />
                                <p className='font-semibold text-base mx-1'>Category </p>
                                <p className=' text-sm text-gray-800 mx-1'>Graphic</p>
                            </div>
                        </div>
                        <div className='px-4 mx-2 flex flex-col items-start justify-center'>
                            <div className='flex items-center justify-center mb-1'>
                                <BsBriefcaseFill className='text-xs font-semibold text-indigo-600' />
                                <p className='font-semibold text-base mx-1'>Job Type </p>
                                <p className='text-sm text-gray-800 mx-1'>full time</p>
                            </div>
                            <div className='flex items-center justify-center mb-1'>
                                <AiOutlineDollarCircle className='text-xs font-semibold text-indigo-600' />
                                <p className='font-semibold text-base mx-1'>Salary </p>
                                <p className=' text-sm text-gray-800 mx-1'>40000 /month</p>
                            </div>
                        </div>
                        <div className='flex items-center justify-center'>
                            <button className='px-6 py-3 bg-indigo-500 rounded text-base tracking-widest uppercase transition-all duration-700 hover:bg-indigo-900 text-white  '>Apply Position</button>
                        </div>
                    </div>
                </div>
                <div className='w-full px-4 py-2 flex items-start justify-center'>
                    <div className='w-8/12 px-4 py-8 border-2 flex flex-col items-center content-start justify-center '>
                        <h1 className='text-center lg:text-2xl font-semibold text-xl mb-4'>Job Description</h1>
                        <p className='px-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos unde, neque, commodi impedit omnis molestiae laborum voluptas accusamus earum nam ea ipsum itaque sed deleniti exercitationem sapiente magni eius? Delectus assumenda explicabo nesciunt non dicta debitis tenetur praesentium, pariatur, corrupti a fugit, repudiandae sit? Ipsa ullam amet molestias doloribus accusamus vero aut, praesentium delectus quasi! Obcaecati, autem hic dicta, dolorum voluptate fugiat aliquid molestias cum veniam, alias animi earum quasi quos aspernatur iure voluptatibus molestiae magni qui nam odio dolore numquam? Similique doloremque perferendis laudantium repudiandae natus, quod exercitationem magni nihil vel explicabo. Nihil adipisci ad ullam perferendis vel! Vero!</p>
                    </div>
                    <div className='w-4/12 py-8 border-2  px-10'>
                        <h1 className=' text-2xl font-semibold mb-2'>Job Summary</h1>
                        <div className='flex items-center justify-start mb-3'>
                            <RiUserSearchFill className='text-base font-semibold text-indigo-600' />
                            <p className='font-semibold text-base mx-1'>Total Vacancies </p>
                            <p className=' text-sm text-gray-800 mx-1'>2</p>
                        </div>
                        <div className='flex items-center justify-start mb-3'>
                            <BsFillCalendar2DateFill className='text-base font-semibold text-indigo-600' />
                            <p className='font-semibold text-base mx-1'>Dead Line</p>
                            <p className=' text-sm text-gray-800 mx-1'>12/12/12</p>
                        </div>
                        <div className='flex items-center justify-start mb-3'>
                            <HiOutlineStar className='text-base font-semibold text-indigo-600' />
                            <p className='font-semibold text-base mx-1'>Experience Required</p>
                            <p className=' text-sm text-gray-800 mx-1'>3 Years</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full px-8 mb-2 flex flex-col'>
                <h1 className='text-xl font-semibold lg:text-2xl '>Related Jobs</h1>
                <div className='px-8 mx-4'>
                    {/* card */}
                    <div className='w-96 py-3 flex items-start px-6 justify-center flex-col rounded bg-gray-50'>
                        <div className='mb-4 flex px-4  items-center justify-start py-2 '>
                            <Image width={70} height={70} className="flex rounded-full " src={"https://xsgames.co/randomusers/avatar.php?g=male"} alt="no image" />
                            <div className='flex flex-col mx-2 px-2'>
                                <h1 className='text-xl md:text-2xl font-semibold'>hello</h1>
                                <p className='text-xs sm:text-sm md:text-base text-gray-800'>hello</p>
                            </div>
                        </div>
                        <div className='flex flex-col px-4 py-6 items-start justify-center'>
                            <div className='flex px-4 items-center justify-center mb-2'>
                                <BsBriefcaseFill className='text-base font-semibold text-indigo-600' />
                                <p className='font-semibold text-base mx-1'>Job Type </p>
                                <p className='text-sm text-gray-800 mx-1'>full time</p>
                            </div>
                            <div className='flex px-4 items-center justify-center mb-2'>
                                <AiOutlineDollarCircle className='text-base font-semibold text-indigo-600' />
                                <p className='font-semibold text-base mx-1'>Salary </p>
                                <p className=' text-sm text-gray-800 mx-1'>40000 /month</p>
                            </div>
                            <div className='flex px-4 items-center justify-center mb-2'>
                                <RiUserSearchFill className='text-base font-semibold text-indigo-600' />
                                <p className='font-semibold text-base mx-1'>Total Vacancies </p>
                                <p className=' text-sm text-gray-800 mx-1'>2</p>
                            </div>
                            <div className='flex px-4 items-center justify-center mb-2'>
                                <BsFillCalendar2DateFill className='text-base font-semibold text-indigo-600' />
                                <p className='font-semibold text-base mx-1'>Dead Line</p>
                                <p className=' text-sm text-gray-800 mx-1'>12/12/12</p>
                            </div>
                        </div>
                        <button className='my-2 py-2 px-4  border border-indigo-600 uppercase  rounded flex items-center justify-center transition-all duration-700 hover:bg-indigo-600 hover:text-white text-indigo-600 font-semibold'>Apply Now <AiOutlineArrowRight className='mx-2 text-xl' /></button>
                    </div>
                    {/* card */}
                </div>
            </div>
        </>
    )
}
