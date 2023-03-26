import AppliedJobDataTable from '@/components/AppliedJobDataTable'
import NavBar from '@/components/NavBar'
import SavedJobDataTable from '@/components/SavedJobDataTable'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { BsFillBookmarkStarFill } from 'react-icons/bs'
import { GiSuitcase } from 'react-icons/gi'
import { useSelector } from 'react-redux'

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    if (!activeUser || !Cookies.get('token')) {
      router.push('/auth/login')
    }
  }, [])



  const activeUser = useSelector(state => state?.User?.userData)


  




  const [showTable, setShowTable] = useState('appliedJobs')


  return (
    <>
      <NavBar />
      <div className='w-full h-screen pt-20 flex items-center justify-start flex-col'>
        <div className='flex bg-gray-100 flex-wrap items-center justify-center w-full py-2 px-2'>
          {/* applied Jobs */}
          <div onClick={() => setShowTable('appliedJobs')} className='py-2 cursor-pointer border-indigo-600 border-b-2 px-2 w-60 h-32 rounded mx-2 my-2 bg-white flex items-center justify-center'>
            <GiSuitcase className='bg-gray-50 text-indigo-600 rounded-full w-10 h-10' />
            <div className='flex  flex-col mx-2 items-start justify-start px-2 '>
              <p className='text-xl font-semibold'>Total Applied</p>
              <p className='text-lg font-semibold'>50+</p>
            </div>
          </div>

          {/* applied Jobs */}
          <div onClick={() => setShowTable('savedJobs')} className='py-2 cursor-pointer border-b-teal-600 border-b-2 px-2 w-60 h-32 rounded mx-2 my-2 bg-white flex items-center justify-center'>
            <BsFillBookmarkStarFill className='bg-gray-50 text-indigo-600 rounded-full w-10 h-10' />
            <div className='flex  flex-col items-start mx-2 justify-start px-2 '>
              <p className='text-xl font-semibold'>Save Jobs</p>
              <p className='text-lg font-semibold'>50+</p>
            </div>
          </div>

          {/* applied Jobs */}
        </div>
        <div className='w-full h-full bg-red-600 px-4 '>
          {
            showTable === 'savedJobs' ? <SavedJobDataTable /> : <AppliedJobDataTable />
          }
        </div>
      </div>
    </>
  )
}
