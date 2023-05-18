
import React, { useState } from 'react'
import './student.scss'

import { CgProfile } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";

const Student = () => {
    const [file, setFile] = useState([]);

    const handleFile = (e) => {
        const uploaded_files = Array.from(e.target.files);
        setFile((prevFile) => [...prevFile, ...uploaded_files])
    }
    const handleDelete = (item) => {
        return setFile(file.filter(data => data !== item))
    }
    console.log(file)
    return (
        <>
            <div className="profile-section">
                <div className="student-profile">
                    <h1>Add New Picture</h1>
                    <hr />
                    <form action="">
                        <input type="text" placeholder='name.' name="name" id="" />
                        <input type="text" placeholder='roll.' name="roll" id="" />
                        <label>
                            <input type="file" multiple onChange={handleFile} style={{ display: "none" }} />

                            <CgProfile className='icon' /><span>Upload file</span>
                        </label>
                        <div className="images-gallary">
                            {
                                file.length > 0 ? file.map((item, index) => {
                                    const imgUrl = URL.createObjectURL(item)
                                    return <div className="image">
                                        <img src={imgUrl} alt={imgUrl} />
                                        <div className="cancel-btn" onClick={() => handleDelete(item)}>
                                            <RxCross2 />
                                        </div>
                                    </div>
                                }) : <small style={{color:"#444"}}>UPLOAD SOME PICTURE</small>
                            }

                        </div>
                    </form>
                    <hr />

                   
                </div>
            </div>
        </>
    )
}

export default Student

