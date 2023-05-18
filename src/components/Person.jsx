import React, { useState } from 'react'
import personData from '../data/personData'


import { Pagination } from '@mui/material';




const Person = () => {
    const [data, setdata] = useState(personData);
    const [currentRow, setCurrentRow] = useState(1);
    const [perpageRow, setPerpageRow] = useState(5);

    // const indexOfLastPost = currentPage * perpagePost; 
    // const indexOfFirstPost = indexOfLastPost - perpagePost; 
    // const currentPost = data.slice(indexOfFirstPost,indexOfLastPost);
    const indexLastRow = currentRow * perpageRow
    const indexFirstRow = indexLastRow - perpageRow;
    const perPagedata = data.slice(indexFirstRow, indexLastRow);

    console.log(indexLastRow)

    const handleChange = (event, value) => {
        setCurrentRow(value)
    }


    return (
        <div>

            <table className='table w-[90%] mx-auto bg-white mt-7 shadow rounded'>
                <thead className='bg-[#d5d5d5]'>
                    <th className='py-4'>Id</th>
                    <th className='py-4'>Name</th>
                    <th className='py-4'>Phone</th>
                    <th className='py-4'>Email</th>
                </thead>


                <tbody className=''>
                    {
                        perPagedata.map((data, index) => {
                            return <tr className='border-b-[1px] text-center hover:bg-slate-200 hover:cursor-pointer border-slate-100 text-slate-700 text-md' key={index}>
                                <td className='py-4'>{data.id}</td>
                                <td className='py-4'>{data.name}</td>
                                <td className='py-4'>{data.phone}</td>
                                <td className='py-4'>{data.email}</td>
                            </tr>
                        })
                    }
                </tbody>

            </table>


            <div className="pagination flex justify-center mt-6">
                <Pagination onChange={handleChange} count={Math.ceil(data.length / perpageRow)} />
            </div>

        </div>
    )
}

export default Person