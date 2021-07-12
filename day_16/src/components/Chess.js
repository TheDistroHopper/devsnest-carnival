import "./Chess.css";

function Chess() {
  let boxes = [];
  for (let i = 0; i < 8; i++) {
    boxes.push(<div className="square" />);
  }
  return (
    <div className="Chess">
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

export default Chess;
