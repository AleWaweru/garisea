export const ADD_TODO = "ADD_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const SET_TODOS = "SET_TODOS";
export const REMOVE_COMPLETED_TODOS = "REMOVE_COMPLETED_TODOS"; 

const loadFromLocalStorage = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  }
  return null;
};

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: text,
});

export const completeTodo = (index, isCompleted) => ({
  type: COMPLETE_TODO,
  payload: { index, isCompleted },
});

export const removeTodo = (index) => ({
  type: REMOVE_TODO,
  payload: index,
});

export const removeCompletedTodos = () => ({
  type: REMOVE_COMPLETED_TODOS,
});

export const editTodo = (index, newText) => ({
  type: EDIT_TODO,
  payload: { index, newText },
});

export const setTodos = (todos) => ({
  type: SET_TODOS,
  payload: todos,
});

const initialState = {
  todos: loadFromLocalStorage() || [],
};

const saveToLocalStorage = (todos) => {
  if (typeof window !== 'undefined' && window.localStorage) {
    localStorage.setItem("todos", JSON.stringify(todos));
  }
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const addState = {
        ...state,
        todos: [{ text: action.payload, isCompleted: false }, ...state.todos],
      };
      saveToLocalStorage(addState.todos);
      return addState;

    case COMPLETE_TODO:
      const { index, isCompleted } = action.payload;
      const completeState = {
        ...state,
        todos: state.todos.map((todo, i) =>
          i === index ? { ...todo, isCompleted } : todo
        ),
      };
      saveToLocalStorage(completeState.todos);
      return completeState;

    case REMOVE_TODO:
      const removeState = {
        ...state,
        todos: state.todos.filter((_, i) => i !== action.payload),
      };
      saveToLocalStorage(removeState.todos);
      return removeState;

    case REMOVE_COMPLETED_TODOS: // New case for removing completed todos
      const removeCompletedState = {
        ...state,
        todos: state.todos.filter((todo) => !todo.isCompleted),
      };
      saveToLocalStorage(removeCompletedState.todos);
      return removeCompletedState;

    case EDIT_TODO:
      const { index: editIndex, newText } = action.payload;
      const editState = {
        ...state,
        todos: state.todos.map((todo, i) =>
          i === editIndex ? { ...todo, text: newText } : todo
        ),
      };
      saveToLocalStorage(editState.todos);
      return editState;

    case SET_TODOS:
      return {
        ...state,
        todos: action.payload,
      };

    default:
      return state;
  }
};
