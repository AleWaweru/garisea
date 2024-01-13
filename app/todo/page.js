"use client";
import TodoListItems from "../components/TodoListItems";
import { ReduxProvider } from "../../redux/provider";
import { SessionProvider } from "next-auth/react";

const TodoPage = () => {
  return(
    <>
  <SessionProvider>
  <ReduxProvider>
  <TodoListItems />
  </ReduxProvider>
</SessionProvider>
  
  
  </>
  )};

export default TodoPage;
