"use client";
import TodoListItems from "../components/TodoListItems";
import AuthGuard from '../components/AuthGuard';

const TodoPage = () => {
  return <TodoListItems />;
};

export default AuthGuard(TodoPage);
