import React from 'react'
import { BiSearch } from "react-icons/bi";
import './header.scss'

const Header = () => {
  return (
    <>

      <div className='all w-screen h-screen flex  justify-center align-middle bg-slate-500'>
        <div className="profile-card bg-white h-1/4 w-1/4 rounded border-purple-700 border-4 shadow flex justify-center">
          <p>name: kamrul islam</p>
          <h4>Web designe & developer</h4>

        </div>
        
      </div>


      {
        

        console.table({
          name: "kamrul",
          age: 20
        })


      }

      <div className="slider m-auto">
        <div className="container">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia reprehenderit veniam sed velit itaque aperiam magnam dolore doloribus iusto. Illum?</p>
        </div>
      </div>
    </>
  )
}

export default Header
