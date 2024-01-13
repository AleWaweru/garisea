"use client"
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, completeTodo, removeTodo, editTodo } from "../../redux/reducer/reducers";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItems";
import { useRouter } from "next/navigation";
import { useSession } from 'next-auth/react';

const TodoListItems = () => {
  const [isClient, setIsClient] = useState(false);
  const todos = useSelector((state) => state.todoReducer.todos);
  const dispatch = useDispatch();
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Redirect to login if the user is not authenticated
  useEffect(() => {
    if (status === "authenticated") {
    } else if (status === "loading") {
     
    } else {
     
      router.push("/login");
    }
  }, [status, router]);

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

  return (
    <>
      {isClient && status === "authenticated" && (
        <div>
          <div className="todo-list mx-auto w-full mt-8 p-4 md:max-w-md">
            <h1 className="text-2xl font-bold mb-4">MY TODOLIST</h1>
            <TodoForm addTodo={handleAddTodo} />
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
