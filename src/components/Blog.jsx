import React, { useState } from 'react'
import Data from '../data/data'
import { Link } from 'react-router-dom'

const Blog = () => {
    const [data, setData] = useState(Data)

    // console.log(data)

    const stringTrincate = (string, num) => {
        if (string.length > num) {
            return string.slice(0, num) + "...";
        } else {
            return string
        }
    }


    return (
        <div className='grid grid-cols-2 h-[100px]'>

            {
                 data.map((data,index) => {

                    return (
                    
                        <div key={index} className='bg-cyan-900 text-orange-200 m-5 p-5 shadow rounded' data-aos="zoom-in-down">
                            <small className='ring-1'>{data.id}</small>
                            <h1 className='text-4xl sm:text-6xl md:text-8xl'>{data.title}</h1>
                            <p className='text-sm'>{stringTrincate(data.description, 100)}</p>
                            <button className='bg-white text-black px-5 py-1 hover:bg-slate-500 my-3 rounded'> <Link to={data.title}>{data.title} des ...</Link></button>
                        </div>
                    )

                })
            }



        </div>
    )
}

export default Blog