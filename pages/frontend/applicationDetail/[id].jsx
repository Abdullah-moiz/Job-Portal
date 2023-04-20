import React, { useEffect } from 'react'
import { useRouter } from 'next/router';
import useSWR from 'swr'
import { get_application_details } from '@/Services/job';
import { InfinitySpin } from 'react-loader-spinner';
import NavBar from '@/components/NavBar';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';








export default function ApplicationsDetail() {
    
    const router = useRouter();
    const { id } = router.query;

    const user = useSelector(state => state?.User?.userData)
    const userId = user?._id

    useEffect(() => {
        if (!userId || !Cookies.get('token')) {
            router.push('/auth/login')
        }
    }, [user, userId, Cookies])

    const { data, error, isLoading } = useSWR('/get-application-details', () => get_application_details(id))

    if (error) return toast.error(error) && router.push('/frontend/postedJob')

    


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
                        <div className='w-full px-4 flex flex-wrap  pt-20 '>
                            <div className='w-full h-32 bg-gray-50 text-indigo-600 font-bold flex items-center justify-center flex-col'>
                                <h1 className='text-3xl'>Application Detail</h1>
                            </div>
                            <div className='flex flex-col md:flex-row justify-center md:justify-around items-center w-full h-32 px-4'>
                                <div className='flex py-2'>
                                    <h1 className='text-base font-semibold px-2 '>Name</h1>
                                    <p className='text-sm px-2'>{data?.data?.name}</p>
                                </div>
                                <div className='flex py-2'>
                                    <h1 className='text-base font-semibold px-2 '>Email</h1>
                                    <p className='text-sm px-2'>{data?.data?.email}</p>
                                </div>
                                <div className='flex py-2'>
                                    <h1 className='text-base font-semibold px-2 '>Application Status</h1>
                                    <p className='text-sm px-2 uppercase font-extrabold'>{data?.data?.status}</p>
                                </div>
                            </div>
                        </div>
                       

                    </>
                )
            }
        </>
    )
}
