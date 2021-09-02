const fromCurrencyReducer = (state = "BTC", action) => {
    if (action.type === "UPDATE_FROM") {
        return action.payload;
    }
    return state;
}

export default fromCurrencyReducer;