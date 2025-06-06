export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export interface TodoState {
  todos: Todo[];
}

export const ADD_TODO = "ADD_TODO" as const;
export const DELETE_TODO = "DELETE_TODO" as const;
export const TOGGLE_DONE = "TOGGLE_DONE" as const;

export interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: string;
}

export interface DeleteTodoAction {
  type: typeof DELETE_TODO;
  payload: number;
}

export interface ToggleDoneAction {
  type: typeof TOGGLE_DONE;
  payload: number;
}

export type TodoAction = AddTodoAction | DeleteTodoAction | ToggleDoneAction;

export interface TodoContextType {
  state: TodoState;
  dispatch: React.Dispatch<TodoAction>;
}
