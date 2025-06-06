import React from "react";
import { useTodos, deleteTodo, toggleDone } from "../contexts/TodoContext";
import { Todo } from "../interfaces/types";

const TodoList: React.FC = () => {
  const { state, dispatch } = useTodos();
  const { todos } = state;

  const handleDelete = (id: number): void => {
    dispatch(deleteTodo(id));
  };

  const handleToggleDone = (id: number): void => {
    dispatch(toggleDone(id));
  };

  return (
    <div className="todo-list-container">
      <h2>All Tasks</h2>
      {todos.length === 0 ? (
        <p className="empty-message">No tasks yet. Add one above!</p>
      ) : (
        <ul className="todo-list">
          {todos.map((todo: Todo) => (
            <li
              key={todo.id}
              className={`todo-item ${todo.done ? "done" : ""}`}
            >
              <span className="todo-text">{todo.text}</span>
              <div className="todo-actions">
                <button
                  onClick={() => handleToggleDone(todo.id)}
                  className={`done-btn ${todo.done ? "completed" : ""}`}
                >
                  {todo.done ? "Undo" : "Done"}
                </button>
                <button
                  onClick={() => handleDelete(todo.id)}
                  className="delete-btn"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
