import React, { useState } from "react";
import { useSelector } from "react-redux";
import { decrement, increment } from "./store/slices/count";
import { addTodo, removeTodo } from "./store/slices/todos";
import { RootState, useAppDispatch } from "./store/store";

interface ContentProps {}

export const Content: React.FC<ContentProps> = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<string>("");
  const count: number = useSelector((state: RootState) => state.count.count);
  const todos: string[] = useSelector((state: RootState) => state.todos.todos);

  return (
    <>
      <div>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <h5>{count}</h5>
      </div>
      <div>
        <input
          value={value}
          onChange={(ev: React.ChangeEvent<HTMLInputElement>) =>
            setValue(ev.target.value)
          }
        />
        <button onClick={() => dispatch(addTodo(value))}>Add todo</button>
      </div>
      {todos.map((todo) => (
        <div>
          <h3>{todo}</h3>
          <button onClick={() => dispatch(removeTodo(todo))}>
            Remove todo
          </button>
        </div>
      ))}
    </>
  );
};
