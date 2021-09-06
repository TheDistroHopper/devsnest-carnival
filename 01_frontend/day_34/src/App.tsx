import React from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Alert from "./features/alert/Alert";
import { add } from "./features/alert/alertSlice";
import { Counter } from "./features/counter/Counter";
import Images from "./features/images/Images";

function App() {
  console.log("App");
  const dispatch = useDispatch();
  return (
    <>
      <Counter />
      <button
        onClick={() => {
          dispatch(add());
        }}
      >
        Add Alert
      </button>
      {/* <button
        onClick={() => {
          dispatch(remove());
        }}
      >
        Remove Alert
      </button> */}
      <Alert />
      <Images />
    </>
  );
}

export default App;
