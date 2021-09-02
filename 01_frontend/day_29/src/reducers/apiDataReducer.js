const apiDataReducer = (state = {}, action) => {
    if (action.type === "GET_API_DATA") {
        return action.payload;
    }
    return state;
}

export default apiDataReducer;