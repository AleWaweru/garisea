export const ADD_TODO = "ADD_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const SET_TODOS = "SET_TODOS";

// function to load todos from local storage
const loadFromLocalStorage = () => {
  if (window) {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : null;
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

export const editTodo = (index, newText) => ({
  type: EDIT_TODO,
  payload: { index, newText },
});

//action creator for setting todos
export const setTodos = (todos) => ({
  type: SET_TODOS,
  payload: todos,
});

const initialState = {
  todos: loadFromLocalStorage() || [],
};

// function to save todos to local storage
const saveToLocalStorage = (todos) => {
  if (window) {
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
          i === index ? { ...todo, isCompleted } : todo,
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

    case EDIT_TODO:
      const { index: editIndex, newText } = action.payload;
      const editState = {
        ...state,
        todos: state.todos.map((todo, i) =>
          i === editIndex ? { ...todo, text: newText } : todo,
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
