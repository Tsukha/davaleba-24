import React, { createContext, useContext, useReducer, ReactNode } from "react";
import {
  TodoState,
  TodoAction,
  TodoContextType,
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_DONE,
  AddTodoAction,
  DeleteTodoAction,
  ToggleDoneAction,
} from "../interfaces/types";

export const addTodo = (text: string): AddTodoAction => ({
  type: ADD_TODO,
  payload: text,
});

export const deleteTodo = (id: number): DeleteTodoAction => ({
  type: DELETE_TODO,
  payload: id,
});

export const toggleDone = (id: number): ToggleDoneAction => ({
  type: TOGGLE_DONE,
  payload: id,
});

const initialState: TodoState = {
  todos: [],
};

const todoReducer = (state: TodoState, action: TodoAction): TodoState => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            text: action.payload,
            done: false,
          },
        ],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case TOGGLE_DONE:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, done: !todo.done } : todo
        ),
      };
    default:
      return state;
  }
};

const TodoContext = createContext<TodoContextType | undefined>(undefined);

interface TodoProviderProps {
  children: ReactNode;
}

export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodos = (): TodoContextType => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodos must be used within a TodoProvider");
  }
  return context;
};
