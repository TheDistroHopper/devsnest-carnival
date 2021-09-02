import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem, loadTodos } from "../actions";
const AddTodo = () => {
  const [item, setItem] = useState("");
  const dispatch = useDispatch();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyCcontent: "center",
        alignItems: "center",
      }}
    >
      <button
        style={{ display: "block" }}
        onClick={() => {
          dispatch(loadTodos());
        }}
      >
        Load Todo
      </button>
      <input
        style={{ width: "20vw", display: "inline", marginTop: "3vh" }}
        type="text"
        placeholder="Add Todo..."
        value={item}
        onChange={(e) => {
          setItem(e.target.value);
        }}
      />
      <button
        style={{ width: "10vw", display: "inline", marginTop: "1vh" }}
        onClick={() => {
          dispatch(addItem({ title: item, done: false }));
          setItem("");
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddTodo;
