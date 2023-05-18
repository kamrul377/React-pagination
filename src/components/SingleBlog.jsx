import React, { useEffect, useState } from 'react'
import Data from '../data/data'
import {useParams,Link} from 'react-router-dom'

const SingleBlog = () => {

  const  [bodyData, setBodyData] = useState('')

  const {title} = useParams()

  // console.log(bodyData)

  useEffect(() => {
    const finalData = Data.filter((data) => data.title === title);
    setBodyData(finalData[0].description)
    
  }, [])
  

  // console.log(finalData)

  return (
    <div>
      <p className='bg-indigo-300 m-4 p-4 rounded'>{bodyData}</p>

      
    </div>
  )
}

export default SingleBlog