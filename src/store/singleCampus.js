import axios from 'axios'

const SET_SINGLE_AUTHOR = 'SET_SINGLE_AUTHOR'

const setSingleAuthor = (author) => {
  return {
    type: SET_SINGLE_AUTHOR,
    author
  }
}

export const fetchSingleAuthor = (id) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get(`/api/campuses/${id}`)
      dispatch(setSingleAuthor(data))
    } catch (err) {
      console.log(err)
    }
  }
}

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SINGLE_AUTHOR:
      return action.author
    default:
      return state
  }
}
