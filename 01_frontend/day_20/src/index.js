import React, {useState} from "react";
import ReactDOM from "react-dom";
import "./index.css";


function Item(props) {
  return (
      <div className='component'>
        <h1>
          {props.title}
        </h1>
        <div className="flex">
        <p>
          {'Today you consumed ' + props.desc + ' calories.'}
        </p>
        <button onClick={props.delfun} id={props.index}>Delete</button>
        </div>
        
      </div>
  )
}

function Body() {
  const [cal_list, set_cal_list] = useState([
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
  ]);
  let remove_list = (event) => {
    set_cal_list(cal_list.filter((item, i) => {
          return "" + i !== event.target.id;
      }));
  }
  return (
    <div className='container'>
        {
            cal_list.map((cal_ar, i) => <Item title={cal_ar[0]} desc={cal_ar[1]} index={i} key={i}
                                              delfun={remove_list}/>)
        }
    </div>
);
}



ReactDOM.render(
    <React.StrictMode>
      <Body />
    </React.StrictMode>,
    document.getElementById("root")
);
