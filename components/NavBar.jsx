import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { signOut } from "next-auth/react"
import { BiLogOut } from 'react-icons/bi';



export default function NavBar() {
    const user = useSelector(state => state.User.userData)
    const [scrolled, isScrolled] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                isScrolled(true)
            } else {
                isScrolled(false)
            }
        })
        return () => {
            window.removeEventListener('scroll', () => {
                if (window.scrollY > 20) {
                    isScrolled(true)
                } else {
                    isScrolled(false)
                }
            })
        }
    }, [scrolled])


    const handleLogout = async () => {
        const data = await signOut()
        if (data) {
            Router.push('/')
        }
    }

    return (
        <div className={`w-full ${scrolled ? "bg-indigo-600/70" : "bg-indigo-600"} px-6 h-20 bg-indigo-600 text-white flex items-center justify-between fixed top-0 left-0`}>
            <div className='px-2 h-full flex items-center justify-center'>
                <p className='uppercase font-semibold tracking-widest text-lg'>JOB-PORTAL</p>
            </div>
            <div className='px-2 h-full flex items-center justify-center'>
                <Link href={'/'} className="px-3 mx-4 text-base font-medium transition-all duration-700 hover:translate-y-2 uppercase" >Home</Link>
                <Link href={'/'} className="px-3 mx-4 text-base font-medium transition-all duration-700 hover:translate-y-2 uppercase" >Jobs</Link>
                <Link href={'/'} className="px-3 mx-4 text-base font-medium transition-all duration-700 hover:translate-y-2 uppercase" >About</Link>
                <Link href={'/'} className="px-3 mx-4 text-base font-medium transition-all duration-700 hover:translate-y-2 uppercase" >Contact</Link>
            </div>
            <div className='px-2 h-full flex items-center justify-center'>
                {
                    user !== null ? (
                        <>

                            <BiLogOut onClick={handleLogout} className=' cursor-pointer text-3xl hover:text-red-500 transition-all duration-700' />
                            <p className='text-lg px-4 font-semibold'>Abdullah Moiz</p>
                        </>
                    ) : (
                        <>
                            <Link href={'/auth/login'} className='px-4 py-2 border border-white rounded uppercase tracking-widest mx-4   transition-all duration-700 hover:bg-white font-semibold text-base hover:text-indigo-600'>Login</Link>
                            <Link href={'/auth/register'} className='px-4 py-2 border border-white rounded uppercase tracking-widest mx-4   text-indigo-600 bg-white transition-all duration-700 hover:bg-transparent font-semibold text-base hover:text-white'>REGISTER</Link>
                        </>
                    )
                }

            </div>
        </div>
    )
}
