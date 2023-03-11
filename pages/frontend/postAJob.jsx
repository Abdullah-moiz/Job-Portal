import NavBar from '@/components/NavBar'
import Select from 'react-select'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function PostAJob() {
    const user = useSelector(state => state.User.userData)

    const [formData, setFormData] = useState({ user: user, title: "", salary: "", email: "", company: "", description: "", job_category: "", job_type: "", job_experience: "", job_vacancy: null, job_deadline: "" });
    const [error, setError] = useState({ user: "", title: "", salary: "", email: "", company: "", description: "", job_category: "", job_type: "", job_experience: "", job_vacancy: 0, job_deadline: "" });

    const handleSubmit = async (e) => {

        e.preventDefault();
        
        if (!formData.email) {
            setError({ ...error, email: "Email Field is Required" })
            return;
        }
        if (!formData.title) {
            setError({ ...error, title: "title Field is required" })
            return;
        }
        if (!formData.salary) {
            setError({ ...error, salary: "salary Field is required" })
            return;
        }
        if (!formData.company) {
            setError({ ...error, company: "company Field is required" })
            return;
        }
        if (!formData.description) {
            setError({ ...error, description: "description Field is required" })
            return;
        }
        if (!formData.job_category) {
            setError({ ...error, job_category: "job_category Field is required" })
            return;
        }
        if (!formData.job_type) {
            setError({ ...error, job_type: "job_type Field is required" })
            return;
        }
        if (!formData.job_experience) {
            setError({ ...error, job_experience: "job_experience Field is required" })
            return;
        }
        if (!formData.job_vacancy) {
            setError({ ...error, job_vacancy: "job_vacancy Field is required" })
            return;
        }
        if (!formData.job_deadline) {
            setError({ ...error, job_deadline: "job_deadline Field is required" })
            return;
        }

        if (formData.user == null) {
            toast.error("Please Login First");
        }

        console.log(formData)
    }



    const options = [
        { value: 'fulltime', label: 'Full Time' },
        { value: 'parttime', label: 'Part Time' },
        { value: 'internship', label: 'Internship' },
        { value: 'contract', label: 'Contract' },
    ]

    return (
        <>
            <NavBar />
            <div className='w-full  py-20 flex items-center  justify-center flex-col'>
                <h1 className='text-xl mt-4 uppercase tracking-widest border-b-2 border-b-indigo-600 py-2 font-semibold mb-8 md:text-2xl lg:text-4xl'>Enter Job Details</h1>
                <form onSubmit={handleSubmit} className="sm:w-1/2 w-full px-4 mx-4  h-full" >
                    <div className='w-full mb-4  flex flex-col items-start justify-center'>
                        <label htmlFor="title" className='mb-1 text-base font-semibold'>Title :</label>
                        <input type="text" id='title' className='w-full py-2 px-3 mb-2 border border-indigo-600 rounded' placeholder='Enter title of job' />
                        {
                            error.title && <p className="text-sm text-red-500">{error.title}</p>
                        }
                    </div>
                    <div className='w-full mb-4  flex flex-col items-start justify-center'>
                        <label htmlFor="salary" className='mb-1 text-base font-semibold'>Salary :</label>
                        <input type="text" id='salary' className='w-full py-2 px-3 mb-2 border border-indigo-600 rounded' placeholder='Enter title of job' />
                        {
                            error.salary && <p className="text-sm text-red-500">{error.salary}</p>
                        }
                    </div>
                    <div className='w-full mb-4  flex flex-col items-start justify-center'>
                        <label htmlFor="email" className='mb-1 text-base font-semibold'>Email :</label>
                        <input type="email" id='email' className='w-full py-2 px-3 mb-2 border border-indigo-600 rounded' placeholder='Enter title of job' />
                        {
                            error.email && <p className="text-sm text-red-500">{error.email}</p>
                        }
                    </div>
                    <div className='w-full mb-4  flex flex-col items-start justify-center'>
                        <label htmlFor="company" className='mb-1 text-base font-semibold'>Company :</label>
                        <input type="text" id='company' className='w-full py-2 px-3 mb-2 border border-indigo-600 rounded' placeholder='Enter title of job' />
                        {
                            error.company && <p className="text-sm text-red-500">{error.company}</p>
                        }
                    </div>
                    <div className='w-full mb-4  flex flex-col items-start justify-center'>
                        <label htmlFor="description" className='mb-1 text-base font-semibold'>Description :</label>
                        <textarea onResize={"none"} type="text" id='description' className='w-full py-2 px-3 mb-2 border border-indigo-600 rounded' placeholder='Enter title of job' />
                        {
                            error.description && <p className="text-sm text-red-500">{error.description}</p>
                        }
                    </div>
                    <div className='w-full mb-4  flex flex-col items-start justify-center'>
                        <label htmlFor="jobCategory" className='mb-1 text-base font-semibold'>Job Category :</label>
                        <input type="text" id='jobCategory' className='w-full py-2 px-3 mb-2 border border-indigo-600 rounded' placeholder='Enter title of job' />
                        {
                            error.job_category && <p className="text-sm text-red-500">{error.job_category}</p>
                        }
                    </div>
                    <Select placeholder="Please Select Job type" options={options} />
                    <div className='w-full mb-4  flex flex-col items-start justify-center'>
                        {
                            error.job_category && <p className="text-sm text-red-500">{error.job_category}</p>
                        }
                    </div>
                    <div className='w-full mb-4  flex flex-col items-start justify-center'>
                        <label htmlFor="jobExperience" className='mb-1 text-base font-semibold'>Job Experience :</label>
                        <input type="text" id='jobExperience' className='w-full py-2 px-3 mb-2 border border-indigo-600 rounded' placeholder='Enter title of job' />
                        {
                            error.job_experience && <p className="text-sm text-red-500">{error.job_experience}</p>
                        }
                    </div>
                    <div className='w-full mb-4  flex flex-col items-start justify-center'>
                        <label htmlFor="jobva" className='mb-1 text-base font-semibold'>Job Vacancy :</label>
                        <input type="number" id='jobva' className='w-full py-2 px-3 mb-2 border border-indigo-600 rounded' placeholder='Enter title of job' />
                        {
                            error.job_vacancy && <p className="text-sm text-red-500">{error.job_vacancy}</p>
                        }
                    </div>
                    <div className='w-full mb-4  flex flex-col items-start justify-center'>
                        <label htmlFor="jobva" className='mb-1 text-base font-semibold'>Job Deadline :</label>
                        <input type="date" id='jobva' className='w-full py-2 px-3 mb-2 border border-indigo-600 rounded' placeholder='Enter title of job' />
                        {
                            error.job_deadline && <p className="text-sm text-red-500">{error.job_deadline}</p>
                        }
                    </div>
                    <button type='submit' className='w-full py-2 rounded bg-indigo-600 text-white font-semibold tracking-widest'>Submit</button>
                </form>
            </div>
            <ToastContainer />
        </>
    )
}
