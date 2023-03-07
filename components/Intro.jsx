import React from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import { BsFillBookmarkFill } from 'react-icons/bs'

export default function Intro() {
  return (
    <div className='w-full  h-full flex items-center justify-start py-24'>
      <div className='w-3/6 h-full my-2 flex items-start justify-start p-20 flex-col '>
        <h1 className='text-6xl font-extrabold mb-4 text-black'>To Choose <span className='text-indigo-600'>Right Jobs.</span> </h1>
        <p className='text-lg mb-20 text-gray-400'>2400 Peoples are daily search in this portal, 100 user added job portal!</p>
        <div className='bg-white mb-6 w-full px-4 py-4 flex items-center justify-center'>
          <BiSearchAlt className='text-4xl text-indigo-600 mx-2' />
          <input type="text" placeholder='Search Jobs...' className='w-full h-full px-4 bg-gray-200 text-xl py-3 outline-none' />
          <button className='px-4 py-3 border border-indigo-600 rounded uppercase tracking-widest mx-4   text-white bg-indigo-600 transition-all duration-700 hover:bg-transparent font-semibold text-base hover:text-indigo-600'>Search</button>
        </div>
        <div className=' w-full px-2 py-2 flex items-center justify-start flex-wrap'>
          <div className='flex items-center justify-center'>
            <BsFillBookmarkFill className='text-indigo-600 text-xl mx-2'/>
            <h1 className='font-semibold text-lg'>Suggest Tag : </h1>
          </div>
          <div className='flex   items-center justify-center px-4 flex-wrap'>
            <p className='px-2  text-gray-600'>Engineer</p>
            <p className='px-2  text-gray-600'>UI/UX Design</p>
            <p className='px-2  text-gray-600'>Marketing</p>
          </div>
        </div>
      </div>
      <div className='w-3/6 my-2 h-full bg-gray-200 flex items-center justify-center flex-col p-20'>
        <img src="https://demo-egenslab.b-cdn.net/html/jobes/preview/assets/images/bg/hero3-img-with-vec.png" alt="no-image-found" />
      </div>
    </div>
  )
}


// <h1 className='font-semibold text-4xl mb-3 '>Empowering board members to </h1>
//         <h1 className='font-semibold text-4xl mb-3 '>make informed decisions </h1>
//         <h1 className='font-semibold text-lg mb-3 uppercase'>LOOKING FOR TALENT  OR SEARCHINg for job</h1>
//         <button className='px-4 py-2 border border-indigo-600 rounded uppercase tracking-widest mx-4   text-white bg-indigo-600 transition-all duration-700 hover:bg-transparent font-semibold text-base hover:text-indigo-600'>get Started</button>