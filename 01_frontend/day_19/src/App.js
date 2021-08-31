import Count from "./components/Count";
import "./App.css";

function App() {
  let arr = [];

  for (let i = 0; i < 5; i++) {
    arr.push(<Count />);
  }
  return <div className="App">{arr}</div>;
}

export default App;
