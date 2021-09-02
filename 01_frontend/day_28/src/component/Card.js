import '../style/card.css';

const Card = (data) => {
    console.log(data)
    return (
        data["data"]["Realtime Currency Exchange Rate"] ?
            <div className="card">
                <h3>From: {data["data"]["Realtime Currency Exchange Rate"]["2. From_Currency Name"]}</h3>
                <h3>To: {data["data"]["Realtime Currency Exchange Rate"]["4. To_Currency Name"]}</h3>
                <h3>Exchange Rate: {data["data"]["Realtime Currency Exchange Rate"]["5. Exchange Rate"]}</h3>
                <h3>Last Updated: {data["data"]["Realtime Currency Exchange Rate"]["6. Last Refreshed"]} (UTC)</h3>
            </div> : (data["data"]["Error Message"]) ? <h2>Invalid API call</h2> : (data["data"]["Note"]) ? <h2>API Limit Reached</h2> : <h2>Select Currencies</h2>
    )
}

export default Card