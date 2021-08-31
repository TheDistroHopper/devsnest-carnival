import counterReducer from "./counter";
import loggedReducer from "./logged";
import { combineReducers } from "redux";


const sagleReducers = combineReducers({
    counter : counterReducer,
    logged : loggedReducer
})

export default sagleReducers