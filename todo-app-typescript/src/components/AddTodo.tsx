import React, { useState, ChangeEvent, KeyboardEvent } from "react";
import { useTodos, addTodo } from "../contexts/TodoContext";

const AddTodo: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const { dispatch } = useTodos();

  const handleAddTodo = (): void => {
    if (inputValue.trim()) {
      dispatch(addTodo(inputValue.trim()));
      setInputValue("");
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <div className="add-todo-container">
      <h2>Add New Task</h2>
      <div className="input-group">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Enter your todo..."
          className="todo-input"
        />
        <button onClick={handleAddTodo} className="add-btn">
          Add Task
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
