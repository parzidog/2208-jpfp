import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import students from './students'
import campus from './campus'
import singleCampus from './singleCampus'
import singleStudent from './singleStudent'

const reducer = combineReducers({
  students,
  campus,
  singleCampus,
  singleStudent
})

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed:true}))
)

const store = createStore(reducer, middleware)

export default store