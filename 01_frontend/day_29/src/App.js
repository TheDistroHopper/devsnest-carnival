import './App.css';
import CurrencySelector from "./component/CurrencySelector";
import Card from "./component/Card";
import {useState} from "react";

function App() {
    return (
        <div className="App">
            <CurrencySelector />
            <Card />
        </div>
    );
}

export default App;