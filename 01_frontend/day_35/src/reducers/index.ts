import { combineReducers } from "redux";
import { fetchDataReducer } from "./fetchDataReducer";

const rootReducer = combineReducers({data:fetchDataReducer,})

export type rootReducerType = ReturnType<typeof rootReducer>

export default rootReducer;