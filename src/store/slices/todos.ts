import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface todosState {
  todos: string[];
}

const initialState: todosState = {
  todos: ["помыть полы", "найти работу", "если не найду идти в пятёрочку"],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state: todosState, action: PayloadAction<string>) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state: todosState, action: PayloadAction<string | null>) => {
      state.todos.pop();
    },
  },
});

export default todosSlice.reducer;

export const { addTodo, removeTodo } = todosSlice.actions;
