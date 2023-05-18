
import React, { useState } from 'react'
import './teacher.scss'

const Teacher = () => {

    const [value, setValue] = useState('')

    const handleChange =(e)=>{
        setValue(e.target.value)
    }

    console.log(value)

    return (
        <>
            <div className="teacher-section">
                <div className="teachers">
                    <h2>Add Your favourite Teacher.</h2>
                    <form action="">
                        <input type="text" name="name" id="" placeholder='name...' />
                        <input type="email" name="email" id="" placeholder='email..' />
                        <label htmlFor="gender">
                            <select onChange={(e)=>handleChange(e)}>
                                <option>-select items--</option>
                                <option value="01" >male</option>
                                <option value="02" >female</option>
                            </select>
                        </label>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Teacher