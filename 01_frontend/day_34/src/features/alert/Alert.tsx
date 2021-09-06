import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import { remove } from "./alertSlice";

const Alert = () => {
  const alerts = useSelector((state: RootState) => state.alerts);
  const dispatch = useDispatch();
  console.log("alerts");

  return (
    <div>
      {alerts.map((alert, index) => (
        <div
          onClick={() => {
            console.log("rem");
            dispatch(remove(alert.id));
          }}
          key={index}
        >
          <h6>{alert.id}</h6>
          <h6>{alert.desc}</h6>
        </div>
      ))}
    </div>
  );
};

export default Alert;
