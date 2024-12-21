import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
const SingleToDo = ({ item,index,removeToDo ,editToDo}) => {

  return (
    <div className="lg:w-1/4 w-full border-red-400 px-2 mb-4">
      <div className="bg-white shadow-sm rounded-md p-3  w-48  h-30 ">
        <div className="flex justify-between border-red-400 items-center">
          <h5
           
          >
            {item}
          </h5>
          <div className="flex gap-2">
        <button onClick={()=>removeToDo(index)} className=" bg-red-600 text-white px-2 py-3 rounded-md"><MdDelete/></button>
        <button onClick={()=>editToDo(index)} className=" bg-red-600 text-white px-2 py-3 rounded-md"><FaEdit /></button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default SingleToDo;
