import './App.css';
import CurrencySelector from "./component/CurrencySelector";
import Card from "./component/Card";
import {useState} from "react";

function App() {
    const [data, setData] = useState({})
    const API_KEY = process.env.REACT_APP_FINANCE_API_KEY;
    const getApiData = (fromCurrency, toCurrency) => {
        fetch(
            `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${fromCurrency}&to_currency=${toCurrency}&apikey=${API_KEY}`
        ).then(response => response.json())
            .then(data => {
                setData(data)
            })
    }
    return (
        <div className="App">
            <CurrencySelector getApiData ={getApiData}/>
            <Card data={data}/>
        </div>
    );
}

export default App;