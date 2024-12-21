import React from 'react'
import { IoMdPerson } from "react-icons/io";

const Navbar = () => {
  return (
    <>
    <div className="navbar  bg-stone-600">
  <div className="flex-1">
    <a className="btn btn-ghost text-red-300 text-xl">ToDoList</a>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="">
        <div className=" bg-red-300 p-4 rounded-full">
        <IoMdPerson className="text-white" style={{ fontSize: '20px' }} />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        
       
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
    
    </>
  )
}

export default Navbar
