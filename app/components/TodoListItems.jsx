import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  completeTodo,
  removeTodo,
  editTodo,
  removeCompletedTodos,
} from "../../redux/reducer/reducers";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItems";

const TodoListItems = () => {
  const [isClient, setIsClient] = useState(false);
  const todos = useSelector((state) => state.todoReducer.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleAddTodo = (text) => {
    dispatch(addTodo(text));
  };

  const handleCompleteTodo = (index) => {
    dispatch(completeTodo(index, !todos[index].isCompleted));
  };

  const handleRemoveTodo = (index) => {
    dispatch(removeTodo(index));
  };

  const handleEditTodo = (index, newText) => {
    dispatch(editTodo(index, newText));
  };

  const handleRemoveCompletedTodos = () => {
    dispatch(removeCompletedTodos());
  };

  return (
    <>
      {isClient && (
        <div>
          <div className="todo-list mx-auto w-full mt-8 p-4 md:max-w-md">
            <h1 className="text-2xl font-bold mb-4">MY TODOLIST</h1>
            <TodoForm addTodo={handleAddTodo} />
            <button
              className="bg-red-500 text-white rounded py-2 m-4 "
              onClick={handleRemoveCompletedTodos}
            >
              Remove Completed
            </button>
            {todos.map((todo, index) => (
              <TodoItem
                key={todo.id || index}
                index={index}
                todo={todo}
                completeTodo={handleCompleteTodo}
                removeTodo={handleRemoveTodo}
                editTodo={handleEditTodo}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default TodoListItems;
