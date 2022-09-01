import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const fetchStudentsAsync = createAsyncThunk("allStudents", async () => {
  try {
    const { data } = await axios.get(`/api/students`);
    return data;
  } catch (err) {
    console.log(err);
  }
});

export const addStudentAsync = createAsyncThunk("createStudent", async ({fname, lname, email, gpa, imgUrl, campusId}) => {
  try {
    const { data } = await axios.post(`/api/students/`,{
      fname,
      lname,
      email, 
      gpa,
      imgUrl,
      campusId
    });
    return data;
  } catch (err) {
    console.log(err.response);
  }
});


const studentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStudentsAsync.fulfilled, (state, action) => {
      // Add user to the state array
      return action.payload;
    });
  },
});

export const selectStudents = (state) => {
  return state.students;
};

export default studentsSlice.reducer;