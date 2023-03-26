import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import { useSelector } from 'react-redux';

export default function AppliedJobDataTable() {
    const appliedJobData = useSelector(state => state.AppliedJob.appliedJob)

    const [Data, setData] = useState([]);


    useEffect(() => {
        setData(appliedJobData)
    }, [appliedJobData])

    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        setFilteredData(Data);
    }, [Data])



    const columns = [
        {
            name: 'Apply Date',
            selector: row => new Date(`${row?.job?.createdAt}`).toLocaleDateString('en-GB'),
        },
        {
            name: 'Company',
            selector: row => row?.job?.company,
        },
        {
            name: 'Job title',
            selector: row => row?.job?.title,
        },
        {
            name: 'Job Salary ',
            selector: row => '$' + row?.job?.salary,
        },
        {
            name: 'Action',
            cell: row => <button onClick={() => navigate(`appliedJobDetails/${row._id}`)} className='md:px-2 md:py-2 px-1 py-1 text-xs text-indigo-600 hover:text-white my-2 hover:bg-indigo-600 border border-indigo-600   rounded transition-all duration-700  '>view Detail</button>
        },
    ];




    useEffect(() => {
        if (search === '') {
            setFilteredData(Data);
        } else {
            setFilteredData(Data?.filter((item) => {
                const itemData = item?.job?.company.toUpperCase();
                const textData = search.toUpperCase();
                return itemData.indexOf(textData) > -1;
            }))
        }


    }, [search, Data])


    return (
        <DataTable
            subHeaderAlign={"right"}
            columns={columns}
            data={filteredData}
            keyField="id"
            pagination
            title={`Total Applied Jobs: ${Data.length}`}
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
                    placeholder={"Search with company name..."} />
            }
            className="h-screen bg-white"
        />
    )
}
