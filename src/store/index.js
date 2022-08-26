import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import studentReducer from "../redux/StudentReducer";
import campusReducer from "../redux/CampusReducer";

const rootReducer = combineReducers({
    students: studentReducer,
    campuses: campusReducer
})

function configureStore() {
    // return createStore(########, applyMiddleware(thunk));
    return createStore(rootReducer)
}

export default configureStore;