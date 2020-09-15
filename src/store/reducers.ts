import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";

interface todosState {
  todos: string[];
}

export const addTodo: CaseReducer<todosState, PayloadAction<string>> = (
  state,
  action
) => {
  state.todos.push(action.payload);
};
export const removeTodo: CaseReducer<
  todosState,
  PayloadAction<null | string>
> = (state, action) => {
  state.todos.pop();
};
