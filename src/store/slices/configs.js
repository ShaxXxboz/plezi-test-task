import { createSlice } from "@reduxjs/toolkit";
import { FAILED, IDLE, PENDING, SUCCEEDED } from "../../constants";

const initialState = {
  configs: null,
  status: IDLE,
  error: null,
};

const configsSlice = createSlice({
  name: "configs",
  initialState: initialState,
  reducers: {
    getConfigsFetch: (state) => {
      state.status = PENDING;
    },
    getConfigsSuccess: (state, action) => {
      state.configs = action.payload.configs;
      state.status = SUCCEEDED;
    },
    getConfigsError: (state, action) => {
      state.status = FAILED;
      state.error = action.payload.error;
    },
  },
});

export const { getConfigsFetch, getConfigsSuccess, getConfigsError } =
  configsSlice.actions;

export default configsSlice.reducer;
