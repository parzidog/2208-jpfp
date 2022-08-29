import axios from 'axios'

const SET_STUDENTS = 'SET_STUDENTS'

export const setStudents = (students) => {
  console.log("STUDENTS: ", students)
  return {
    type: SET_STUDENTS,
    students
  }
}

export const fetchStudents = () => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get('/api/students')
      console.log("DATA: ",data)
      dispatch(setStudents(data))
    } catch(err) {
      console.log(err)
    }
  }
}


const initialState = []

export default (state = initialState, action) => {
  switch(action.type) {
    case SET_STUDENTS:
      return action.students
      default:
      return state
  }
}