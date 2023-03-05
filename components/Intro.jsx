import React from 'react'

export default function Intro() {
  return (
    <div className='w-full h-full flex items-center flex-col justify-center text-indigo-600'>
        <h1 className='font-semibold text-4xl mb-3 '>Empowering board members to </h1>
        <h1 className='font-semibold text-4xl mb-3 '>make informed decisions </h1>
        <h1 className='font-semibold text-lg mb-3 uppercase'>LOOKING FOR TALENT  OR SEARCHINg for job</h1>
        <button className='px-4 py-2 border border-indigo-600 rounded uppercase tracking-widest mx-4   text-white bg-indigo-600 transition-all duration-700 hover:bg-transparent font-semibold text-base hover:text-indigo-600'>get Started</button>
    </div>
  )
}
