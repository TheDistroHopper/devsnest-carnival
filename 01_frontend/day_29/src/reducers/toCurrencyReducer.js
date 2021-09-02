const toCurrencyReducer = (state = "", action) => {
    if (action.type === "UPDATE_TO") {
        return action.payload;
    }
    return state;
}

export default toCurrencyReducer;