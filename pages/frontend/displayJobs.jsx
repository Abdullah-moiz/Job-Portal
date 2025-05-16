import useSWRInfinite from 'swr/infinite';
import { get_job } from '@/Services/job';
import React from 'react';
import NavBar from '@/components/NavBar';
import JobsCard from '@/components/JobsCard';

const PAGE_SIZE = 20;

const fetcher = (pageIndex) => get_job(pageIndex + 1, PAGE_SIZE);

export default function DisplayJobs() {
    const {
        data,
        error,
        size,
        setSize,
        isValidating
    } = useSWRInfinite(
        (index) => `/api/job/getAllJobs?page=${index + 1}&limit=${PAGE_SIZE}`,
        fetcher
    );

    const jobs = data ? [].concat(...data.map(d => d.data)) : [];
    const isLoadingMore = isValidating && size > 0 && data && typeof data[size - 1] === "undefined";
    const isReachingEnd = data && data[data.length - 1]?.data.length < PAGE_SIZE;

    // Infinite scroll handler (simplified)
    const handleScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop
            >= document.documentElement.offsetHeight - 500 &&
            !isLoadingMore && !isReachingEnd
        ) {
            setSize(size + 1);
        }
    };

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });

    return (
        <>
            <NavBar />
            <div className='w-full py-20 flex items-center md:px-8 px-2 justify-center flex-col'>
                <h1 className='px-4 mx-2 py-2 uppercase tracking-wider border-b-2 border-b-indigo-600 text-3xl font-semibold'>Available Jobs</h1>
                <div className='w-full h-full py-4 flex overflow-y-auto items-center justify-center flex-wrap'>
                    {jobs.length > 0 ? jobs.map((job) => (
                        <JobsCard job={job} key={job?._id} />
                    )) : <p>No jobs found</p>}
                    {isLoadingMore && <p>Loading more jobs...</p>}
                    {isReachingEnd && <p>No more jobs</p>}
                </div>
            </div>
        </>
    );
}