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
    console.log('FIRST NAME: ',fname)
    return data;
  } catch (err) {
    console.log(err.response);
  }
});

export const deleteStudentAsync = createAsyncThunk("deleteStudent", async (studentId)=>{
  try{
    const { data } = await axios.delete(`/api/students/${studentId}`);
    return data;
  }
  catch(err){
    console.log(err)
  }
})

export const editStudentAsync = createAsyncThunk(
  "editStudent",
  async ({id,fname, lname, email, gpa, imgUrl, campusId}) => {
    const { data } = await axios.put(`/api/students/${id}`, {
      fname,
      lname,
      email, 
      gpa,
      imgUrl,
      campusId
    });
    return data;
  }
);

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