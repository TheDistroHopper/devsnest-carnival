import "../style/currencySelector.css"
import {useDispatch, useSelector} from "react-redux";
import {updateFromCurrency, updateToCurrency, getApiData} from "../actions";
import digital from "../digital_currency.json"
import physical from "../physical_currency.json"

const CurrencySelector = () => {

    const dispatch = useDispatch();

    const from = useSelector((state) => state.fromCurrency)
    const to = useSelector((state) => state.toCurrency)
    const apiData = useSelector((state) => state.apiData)

    return (<div>
        <select id="from-currency" className="dropdown-content" onChange={e => {
            dispatch(updateFromCurrency(e.target.value));
        }}
        >
            <option value="">Select From</option>
            {digital.map((currency) => (
                <option key={currency.code} value={currency.code}>{currency.name}</option>
            ))}
        </select>

        <select id="to-currency" className="dropdown-content" onChange={e => {
            dispatch(updateToCurrency(e.target.value));
        }}
        >
            <option value="">Select To</option>
            {physical.map((currency) => (
                <option key={currency.code} value={currency.code}>{currency.name}</option>
            ))}

        </select>

        <button onClick={() => {
            dispatch(getApiData(from, to))
        }}>Submit
        </button>
    </div>)
}

export default CurrencySelector