import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {};

export const fetchSingleStudent = createAsyncThunk("singleStudent", async (id) => {
  try {
    const { data } = await axios.get(`/api/students/${id}`);
    return data;
  } catch (err) {
    console.log(err);
  }
});

const singleStudentSlice = createSlice({
  name: "singleStudent",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleStudent.fulfilled, (state, action) => {
      // Add student to the state
      return action.payload;
    });
  },
});

export const selectSingleStudent = (state) => {
  return state.singleStudent;
};

export default singleStudentSlice.reducer;