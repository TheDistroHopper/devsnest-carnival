const updateFromCurrency = (from) => {
    return {
        type: "UPDATE_FROM",
        payload: from,
    };
};

const updateToCurrency = (to) => {
    return {
        type: "UPDATE_TO",
        payload: to,
    };
};

const getApiData = (from, to) => {
    const API_KEY = process.env.REACT_APP_FINANCE_API_KEY;
    return (dispatch) => {
        fetch(
            `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${from}&to_currency=${to}&apikey=${API_KEY}`
        ).then(response => response.json())
            .then(data => {
                dispatch({
                    type: "GET_API_DATA",
                    payload: data,
                })
            })
    }
}
export {updateFromCurrency, updateToCurrency, getApiData};