import NavBar from '@/components/NavBar';
import { forget_password } from '@/Services/auth';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ForgetPassword() {
  const Router = useRouter();

  const [formData, setFormData] = useState({ email: "", password: "", confirmPassword: "" });
  const [error, setError] = useState({ email: "", password: "", confirmPassword: "" });




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
    if (!formData.confirmPassword) {
      setError({ ...error, confirmPassword: "Confirm Password Field is required" })
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Password and Confirm Password does not match");
    }

    const res = await forget_password(formData);
    if (res.success) {
      toast.success(res.message);
      setTimeout(() => {
        Router.push('/auth/login')
      }, 1000);
    }
    else {
      toast.error(res.message);
    }
  }


  return (
    <>
      <NavBar />
      <section className="bg-indigo-600  text-center">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
          <div className="w-full p-6 bg-white rounded-lg shadow  md:mt-0 sm:max-w-md  sm:p-8">
            <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Change Password
            </h2>
            <form onSubmit={handleSubmit} className="mt-4 space-y-4 lg:mt-5 md:space-y-5" >
              <div className='text-left'>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                <input onChange={(e) => setFormData({ ...formData, email: e.target.value })} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 " placeholder="name@company.com" required="" />
                {
                  error.email && <p className="text-sm text-red-500">{error.email}</p>
                }
              </div>
              <div className='text-left'>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">New Password</label>
                <input onChange={(e) => setFormData({ ...formData, password: e.target.value })} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 " required="" />
                {
                  error.password && <p className="text-sm text-red-500">{error.password}</p>
                }
              </div>
              <div className='text-left'>
                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 ">Confirm password</label>
                <input onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })} type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 " required="" />
                {
                  error.confirmPassword && <p className="text-sm text-red-500">{error.confirmPassword}</p>
                }
              </div>
              <button type="submit" className="w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Reset passwod</button>
            </form>
          </div>
        </div>
        <ToastContainer />
      </section>
    </>
  )
}
