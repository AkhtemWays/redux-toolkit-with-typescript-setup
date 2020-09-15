import { Action, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import logger from "redux-logger";
import todosSlice from "./slices/todos";
import countSlice from "./slices/count";
import postsSlice from "./slices/serverdata";
import { ThunkAction } from "redux-thunk";

export type AppThunk = ThunkAction<void, any, unknown, Action<string>>;

export const store = configureStore({
  reducer: {
    todos: todosSlice,
    count: countSlice,
    posts: postsSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
