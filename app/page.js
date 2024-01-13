"use client";

import Login from "../app/login/page";
import { useEffect, useState } from "react";

const TodoList = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return <Login />;
};

export default TodoList;
