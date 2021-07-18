import React from "react";
import ReactDOM from "react-dom";
import "./index.css";


function Item(props) {
  return (
      <div className='component'>
          <h1>
              {props.title}
          </h1>
          <p>
              {'Today you consumed ' + props.desc + ' calories.'}
          </p>
      </div>
  )
}

let cal_list = Array(10);
cal_list = [
  ['Homemade Granola', 489],
  ['Meats (Chicken Leg)', 184],
  ['Firm Tofu', 144],
  ['Fish (Salmon)', 206],
  ['Avocados', 160],
  ['Dairy Foods (Milk)', 61],
  ['Chickpeas (Garbanzo Beans)', 164],
  ['Sweet Potatoes', 101],
  ['Whole Grains (Brown Rice)', 123],
  ['Nuts (Macadamia Nuts)', 718],
]


ReactDOM.render(
  <React.StrictMode>
    <div className='container'>
            {
                cal_list.map(cal_ar => <Item title={cal_ar[0]} desc={cal_ar[1]}/>)
            }
        </div>
  </React.StrictMode>,
  document.getElementById("root")
);
