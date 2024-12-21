import React, { useState } from "react";
import SingleToDo from "./SingleToDo";

const ToDoList = () => {
  const [todo, setToDo] = useState("");
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(null); // Track the index of the item being edited

  const handletodo = (e) => {
    e.preventDefault();
    if (!todo) {
      setError(true);
    } else {
      setError(false);
      if (editIndex !== null) {
        // Update the existing to-do
        const updatedData = data.map((item, index) =>
          index === editIndex ? todo : item
        );
        setData(updatedData);
        setEditIndex(null);
      } else {
        setData([...data, todo]);
      }
      setToDo("");
    }
  };

  const removeToDo=(id)=>{
        const newToDo=data.filter((item,index)=>{
            return index!==id;


        })
        setData(newToDo);

    }

  const editToDo = (index) => {
    setToDo(data[index]);
    setEditIndex(index);
  };

  return (
    <>
      <div className="max-w-lg mx-auto rounded-lg  shadow-lg p-6 mt-44 bg-white border border-red-400">
        <h1 className="text-3xl font-bold text-center mb-4">To Do List</h1>
        <form>
          <label
            htmlFor="todo"
            className="block text-lg font-medium text-gray-700"
          >
            ToDo
          </label>
          <input
            type="text"
            id="todo"
            placeholder="Enter your todo..."
            value={todo}
            onChange={(e) => setToDo(e.target.value)}
            className="block w-full h-11 border border-red-400 rounded-md shadow-md sm:text-sm mt-2"
          />
          {error && (
            <p className="text-red-600 font-semibold mt-2">
              Please enter your to-do
            </p>
          )}
          <button
            onClick={handletodo}
            className="bg-red-400 text-black font-semibold w-full py-2 rounded-md shadow-md mt-4 hover:bg-red-500"
          >
            {editIndex !== null ? "Update ToDo" : "Add ToDo"}
          </button>
        </form>
      </div>

      <div className="container mx-auto border-red-400 mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2  border-red-400 lg:grid-cols-3 gap-4">
          {data?.map((item, index) => (
            <SingleToDo
              key={index}
              removeToDo={removeToDo}
              editToDo={editToDo}
              item={item}
              index={index}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ToDoList;
