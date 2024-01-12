import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  completeTodo,
  removeTodo,
  editTodo,
} from "../../redux/reducer/reducers";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItems";

<>
  <TodoItem />
  <TodoForm />
</>;

const TodoListItems = () => {
  const todos = useSelector((state) => state.todoReducer.todos);
  const dispatch = useDispatch();

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
    <div className="todo-list mx-auto w-full mt-8 p-4 md:max-w-md">
      <h1 className="text-2xl font-bold mb-4">MY TODOLIST</h1>
      <TodoForm addTodo={handleAddTodo} />
      {todos.map((todo, index) => (
        <TodoItem
          key={todo.id}
          index={index}
          todo={todo}
          completeTodo={handleCompleteTodo}
          removeTodo={handleRemoveTodo}
          editTodo={handleEditTodo}
        />
      ))}
    </div>
  );
};

export default TodoListItems;
