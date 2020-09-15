import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface DataPiece {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface ServerData {
  data: DataPiece[];
  errors: string;
  loading: boolean;
}

const initialState: ServerData = {
  data: [],
  errors: "",
  loading: false,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },
    setErrors: (state, { payload }: PayloadAction<string>) => {
      state.errors = payload;
    },
    setData: (state, { payload }: PayloadAction<DataPiece[]>) => {
      state.data = payload;
    },
  },
});

export default postsSlice.reducer;

export const { setLoading, setErrors, setData } = postsSlice.actions;

export const dataSelector = (state: { dataStore: ServerData }) =>
  state.dataStore;
