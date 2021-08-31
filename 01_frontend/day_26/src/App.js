import React from "react";
import {useSelector, useDispatch} from 'react-redux'
import {increment} from './actions';
import {decrement} from './actions';
import "./App.css";

function App() {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h2>Tasks Done : {counter}</h2>
      <button onClick= {()=>dispatch(increment())}>+</button>
        <button onClick= {()=>dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
