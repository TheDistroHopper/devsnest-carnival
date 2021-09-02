import "../style/currencySelector.css"
import digital from "../digital_currency.json"
import physical from "../physical_currency.json"
import {useState} from "react";

const CurrencySelector = ({getApiData}) => {

    const [fromCurrency, setFromCurrency] = useState("")
    const [toCurrency, setToCurrency] = useState("")
    const HandleInput = (e) => {
        e.preventDefault()
        getApiData(fromCurrency, toCurrency)
    }
    return <form onSubmit={HandleInput}>
        <select id="from-currency" className="dropdown-content" onChange={e => {
            setFromCurrency(e.target.value)
        }}
        >
            <option value="">Select From</option>
            {digital.map((currency) => (
                <option key={currency.code} value={currency.code}>{currency.name}</option>
            ))}
        </select>

        <select id="to-currency" className="dropdown-content" onChange={e => {
            setToCurrency(e.target.value)
        }}>
            <option value="">Select To</option>
            {physical.map((currency) => (
                <option key={currency.code} value={currency.code}>{currency.name}</option>
            ))}
        </select>

        <input type="submit" value="Submit"/>
    </form>
}

export default CurrencySelector