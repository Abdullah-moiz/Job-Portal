import { change_application_status } from '@/Services/job';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import { toast } from 'react-toastify';

export default function ApplicationsDataTable({ application  }) {
    const router = useRouter();


    const [Data, setData] = useState([]);


    useEffect(() => {
        setData(application)
    }, [])

    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        setFilteredData(Data);
    }, [Data])


    const handleAcceptStatus = async (id) => {
        const data = {id , status : "approved"}
        const res = await change_application_status(data);
        if(res.success) {
            toast.success(res.message)
            router.push('/frontend/postedJob')
        }else{
            toast.error(res.message)
        }

    }

    const handleRejectStatus = async (id) => {
        const data = {id , status : "rejected"}
        const res = await change_application_status(data);
        if(res.success) {
            toast.success(res.message)
            router.push('/frontend/postedJob')
        }else{
            toast.error(res.message)
        }
    }



    const columns = [
        {
            name: 'Name',
            selector: row => row?.user?.name,
        },
        {
            name: 'Email',
            selector: row => row?.user?.email,
        },
        {
            name: 'CV',
            selector: row => row?.cv
        },
        {
            name: 'Status',
            selector: row => row?.status,
        },
        {
            name: 'Action',
            cell: row => (
                <div className='flex items-center justify-start w-40 h-20'>
                    <button onClick={() => handleAcceptStatus(row?._id)} className=' w-20 py-2 mx-2 text-xs text-green-600 hover:text-white my-2 hover:bg-green-600 border border-green-600 rounded transition-all duration-700'>Approved</button>
                    <button onClick={() => handleRejectStatus(row?._id)} className=' w-20 py-2 mx-2 text-xs text-red-600 hover:text-white my-2 hover:bg-red-600 border border-red-600 rounded transition-all duration-700'>Reject</button>
                </div>
            )
        },

    ];




    useEffect(() => {
        if (search === '') {
            setFilteredData(Data);
        } else {
            setFilteredData(Data?.filter((item) => {
                const itemData = item?.user?.name.toUpperCase();
                const textData = search.toUpperCase();
                return itemData.indexOf(textData) > -1;
            }))
        }


    }, [search, Data])


    return (
        <>

            <DataTable
                subHeaderAlign={"right"}
                columns={columns}
                data={filteredData}
                keyField="id"
                pagination
                title={`Total Applications : ${Data?.length}`}
                fixedHeader
                fixedHeaderScrollHeight='79%'
                selectableRows
                selectableRowsHighlight
                subHeader
                persistTableHead
                subHeaderComponent={
                    <input className='w-60  py-2 px-2  outline-none  border-b-2 border-indigo-600' type={"search"}
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder={"Search with Applicant  name..."} />
                }
                className="h-screen bg-white"
            />


        </>
    )
}
