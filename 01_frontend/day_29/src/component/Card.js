import '../style/card.css';
import {useSelector} from "react-redux";

const Card = () => {
    const data = useSelector((state) => state.apiData);
    return (
        Object.keys(data).length === 0 ? <h2>Select Currencies</h2> :
        data["Realtime Currency Exchange Rate"] ?
            <div className="card">
                <h3>From: {data["Realtime Currency Exchange Rate"]["2. From_Currency Name"]}</h3>
                <h3>To: {data["Realtime Currency Exchange Rate"]["4. To_Currency Name"]}</h3>
                <h3>Exchange Rate: {data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]}</h3>
                <h3>Last Updated: {data["Realtime Currency Exchange Rate"]["6. Last Refreshed"]} (UTC)</h3>
            </div> : (data["Error Message"]) ? <h2>Invalid API call</h2> : <h2>API Limit Reached</h2>
    )
}

export default Card