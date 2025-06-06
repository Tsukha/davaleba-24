import React from "react";
import { TodoProvider } from "./contexts/TodoContext";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import CompletedTodos from "./components/CompletedTodos";
import "./App.css";

const App: React.FC = () => {
  return (
    <TodoProvider>
      <div className="app">
        <header className="app-header">
          <h1>Todo App with TypeScript</h1>
        </header>
        <main className="app-main">
          <AddTodo />
          <TodoList />
          <CompletedTodos />
        </main>
      </div>
    </TodoProvider>
  );
};

export default App;
