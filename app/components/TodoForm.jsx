"use client"

import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  return (
    <div className="mt-4 w-full flex-grow">
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row">
        <input
          type="text"
          className="border rounded py-2 px-3 mb-2 md:mb-0  w-[90%] md:w-[65%] ml-4 focus:outline-none"
          value={value}
          placeholder="Add task..."
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-[90%] md:w-[20%]  ml-3  rounded"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
