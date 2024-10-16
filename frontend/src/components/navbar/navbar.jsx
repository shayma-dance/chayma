import React from 'react'
import Logo from "../../../public/logo.svg"
import { NavLink } from 'react-router-dom'
function navbar() {
  return (
    <div className='w-full flex items-center justify-between ml-auto p-4 ' >
        <div className="font-bold text-[#F9627D]">
            YOURLOGOHERE
        </div>
        <div className="">
            <input className='h-10 w-96 bg-neutral-100 outline-none rounded p-4 flex items-center placeholder:text-sm' type='text' placeholder='Search'/>
        </div>
        <div className="flex items-center space-x-4">
            <button className='p-2 text-[#F9627D] bg-white  font-bold rounded text-sm ' >Login</button>
          <NavLink to = "/register" >
          <spam >signUp</spam>
          </NavLink>

        </div>
    </div>
  )
}

export default navbar
