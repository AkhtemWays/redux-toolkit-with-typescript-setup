import { createAsyncThunk } from "@reduxjs/toolkit";
import React, { useEffect } from "react";
import { ServerData, DataPiece, dataSelector } from "./store/slices/serverdata";
import { RootState, useAppDispatch } from "./store/store";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "./utils/getData";

interface OnlineComponentProps {}

export const OnlineComponent: React.FC<OnlineComponentProps> = ({}) => {
  const dispatch = useAppDispatch();
  const data: DataPiece[] = useSelector((state: RootState) => state.posts.data);
  const errors: string = useSelector((state: RootState) => state.posts.errors);
  const loading: boolean = useSelector(
    (state: RootState) => state.posts.loading
  );

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <div>loading...</div>
      ) : data ? (
        data.map((post) => (
          <div>
            <p>{post.id}</p>
            <p>{post.title}</p>
            <p>{post.body}</p>
            <p>{post.userId}</p>
          </div>
        ))
      ) : (
        <h4>errors: {errors}</h4>
      )}
    </div>
  );
};
