import "./App.css";

function App() {
  let boxes = [];
  for (let i = 0; i < 8; i++) {
    boxes.push(<div className="square" />);
  }
  return (
    <div className="App">
      <div className="row">{boxes}</div>
      <div className="row">{boxes}</div>
      <div className="row">{boxes}</div>
      <div className="row">{boxes}</div>
      <div className="row">{boxes}</div>
      <div className="row">{boxes}</div>
      <div className="row">{boxes}</div>
      <div className="row">{boxes}</div>
    </div>
  );
}

export default App;
