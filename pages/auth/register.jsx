import React, { useState , useEffect } from 'react'
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { register_me } from '@/Services/auth';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import NavBar from '@/components/NavBar';


export default function  Register (){
  const router = useRouter();
  
  useEffect(() => {
    if (Cookies.get('token')) {
      router.push('/');
    }
  },[router])


 


  
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState({ email: "", password: "", name: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email) {
      setError({ ...error, email: "Email Field is Required" })
      return;
    }
    if (!formData.password) {
      setError({ ...error, password: "Password Field is required" })
      return;
    }
    if (!formData.name) {
      setError({ ...error, name: "Name Field is required" })
      return;
    }

    const data = await register_me(formData);
    if (data.success) {
      toast.success(data.message);
      setTimeout(() => {
        router.push('/auth/login');
      }, 2000);
    }
    else {
      toast.error(data.message);
    }
  }


  return (
    <>
    <NavBar />
    <div className='w-full h-screen bg-indigo-600 '>
      <div className="flex flex-col text-center items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0 shadow-xl">

        <div className="w-full bg-white rounded-lg shadow dark:border text-black md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Register your account
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
              <div className='text-left'>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Your Name</label>
                <input onChange={(e) => setFormData({ ...formData, name: e.target.value })} type="text" name="name" id="namw" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5" placeholder="Name" required="" />
                {
                  error.name && <p className="text-sm text-red-500">{error.name}</p>
                }
              </div>
              <div className='text-left'>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                <input onChange={(e) => setFormData({ ...formData, email: e.target.value })} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5" placeholder="name@company.com" required="" />
                {
                  error.email && <p className="text-sm text-red-500">{error.email}</p>
                }
              </div>
              <div className='text-left'>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                <input onChange={(e) => setFormData({ ...formData, password: e.target.value })} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5" required="" />
                {
                  error.password && <p className="text-sm text-red-500">{error.password}</p>
                }
              </div>

              <button type="submit" className="w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Sign Up</button>
              <p className="text-sm font-light text-gray-500 ">
                Already have an account  <Link href="/auth/login" className="font-medium text-indigo-600 hover:underline ">Sign In</Link>
              </p>
            </form>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
    </>
  )
}
