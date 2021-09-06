import { actionType, data } from "../actions";
const INTIAL_STATE = {username: "x",
    profilePicture: "x",
    post: ["x"]}

const fetchDataReducer = (state : data[] = [INTIAL_STATE], action : actionType ) => {
    if(action.type === "FETCH_DATA"){
        return state = action.payload;
    }
    return state;
}

export { fetchDataReducer };