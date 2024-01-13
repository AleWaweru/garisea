"use client"
import React, { useState } from "react";

const TodoItem = ({ todo, index, completeTodo, removeTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditText(todo.text);
  };

  const handleSaveEdit = () => {
    if (editText.trim() !== "") {
      editTodo(index, editText);
      setIsEditing(false);
    }
  };

  return (
    <div className="todo-item">
      <div className={`todo p-4 m-2 border rounded ${todo.isCompleted ? "line-through" : ""} bg-blue-100 shadow-md mr-7 flex flex-col`}>
        {isEditing ? (
          // Editing state
          <div className="flex items-center md:w-[100%]">
            <input
              type="text"
              className="border rounded py-2 px-3 mr-2 focus:outline-none flex-grow md:w-[80%]"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
            />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
              onClick={handleSaveEdit}
            >
              Save
            </button>
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white md:w-[40%] font-bold py-2 px-4 ml-2"
              onClick={handleCancelEdit}
            >
              Cancel
            </button>
          </div>
        ) : (
          // Non-editing state
          <div>
            <div className="flex-grow w-full">{todo.text}</div>
            <div className="mt-2 flex flex-wrap">
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 m-2 flex-grow"
                onClick={() => completeTodo(index, !todo.isCompleted)}
              >
                Complete
              </button>

              <button
                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 m-2 flex-grow "
                onClick={handleEditClick}
              >
                Edit
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 m-2 flex-grow md:w-1/3"
                onClick={() => removeTodo(index)}
              >
                X
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
