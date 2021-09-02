import {combineReducers} from 'redux';
import fromCurrencyReducer from "./fromCurrencyReducer";
import toCurrencyReducer from "./toCurrencyReducer";
import apiDataReducer from "./apiDataReducer";

const rootReducer = combineReducers({
    fromCurrency: fromCurrencyReducer,
    toCurrency: toCurrencyReducer,
    apiData: apiDataReducer,
})

export default rootReducer;