import React from "react";
import { useTodos } from "../contexts/TodoContext";
import { Todo } from "../interfaces/types";

const CompletedTodos: React.FC = () => {
  const { state } = useTodos();
  const completedTodos: Todo[] = state.todos.filter((todo: Todo) => todo.done);

  return (
    <div className="completed-todos-container">
      <h2>Completed Tasks</h2>
      {completedTodos.length === 0 ? (
        <p className="empty-message">No completed tasks yet!</p>
      ) : (
        <ul className="completed-list">
          {completedTodos.map((todo: Todo) => (
            <li key={todo.id} className="completed-item">
              <span className="completed-text">{todo.text}</span>
              <span className="checkmark">✓</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CompletedTodos;
