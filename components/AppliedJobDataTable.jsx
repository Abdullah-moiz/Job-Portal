import React, { useState } from 'react'
import DataTable from 'react-data-table-component';

export default function AppliedJobDataTable() {
    const [Data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState([]);


    const columns = [
        {
            name: 'Title',
            selector: row => row.title,
        },
        {
            name: 'Year',
            selector: row => row.year,
        },
    ];

    const data = [
        {
            id: 1,
            title: 'Beetlejuice',
            year: '1988',
        },
        {
            id: 2,
            title: 'Ghostbusters',
            year: '1984',
        },
    ]

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
                    placeholder={"Search ..."} />
            }
            className="h-screen bg-white"
        />
    )
}
