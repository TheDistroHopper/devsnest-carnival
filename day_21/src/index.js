import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Item(props) {
  let toggledisplay = (event, val) => {
    let i = event.target.id.split("-")[1];
    console.log(val);
    document.getElementById("editform-" + i).classList.toggle("hidden");
    document.getElementById("titleinp-" + i).value = val[0];
    document.getElementById("calinp-" + i).value = val[1];
  };
  return props.calArray.map((value, i) => (
    <div className="component" key={i}>
      <h1>{value[0]}</h1>
      <div className="flex">
        <p>{"You consumed " + value[1] + " cals today."}</p>
        <button onClick={props.delfun} id={i}>
          Delete
        </button>
        <button
          onClick={(event) => toggledisplay(event, value)}
          id={"edit-" + i}
        >
          Edit
        </button>
      </div>
      <div id={"editform-" + i} className={"editform hidden"}>
        <input id={"titleinp-" + i} />
        <input id={"calinp-" + i} />
        <button
          onClick={(event) => {
            props.editfun(event);
            toggledisplay(event, value);
          }}
          id={"done-" + i}
        >
          Done
        </button>
      </div>
    </div>
  ));
}

function Body() {
  const [calArray, setCalArray] = useState([
    ["Homemade Granola", 489],
    ["Meats (Chicken Leg)", 184],
    ["Firm Tofu", 144],
  ]);
  let tit;
  let cal;
  let removeArr = (event) => {
    setCalArray(
      calArray.filter((item, i) => {
        return "" + i !== event.target.id;
      })
    );
  };
  let updateArr = (event) => {
    let arr = [...calArray];
    let i = event.target.id.split("-")[1];
    arr[i] = [
      document.getElementById("titleinp-" + i).value,
      document.getElementById("calinp-" + i).value,
    ];
    setCalArray(arr);
  };
  let settits = (event) => {
    tit = event.target.value;
    console.log("inout");
  };
  let setcals = (event) => {
    cal = event.target.value;
  };
  let insertInArr = (event) => {
    if (
      document.getElementById("title_inp").value !== "" &&
      document.getElementById("cal_inp").value !== ""
    ) {
      setCalArray([...calArray, [tit, cal]]);
      document.getElementById("title_inp").value = "";
      document.getElementById("cal_inp").value = "";
    } else {
      alert("empty Strings");
    }
  };
  return (
    <div className="container">
      <div className="form">
        <input id="title_inp" type="text" onChange={settits} />
        <input id="cal_inp" type="number" onChange={setcals} />
        <button onClick={insertInArr}>Submit</button>
      </div>
      <Item calArray={calArray} delfun={removeArr} editfun={updateArr} />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Body />
  </React.StrictMode>,
  document.getElementById("root")
);
