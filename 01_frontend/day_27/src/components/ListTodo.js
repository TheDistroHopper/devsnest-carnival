import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../actions";

const ListTodo = () => {
  let count = 0;
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  return (
    <div>
      {todos.map((todo, index) => (
        <div key = {++count}>
          <h4 style={{ display: "inline-block" }}>{todo.title}</h4>
          <button onClick = {() => {
            dispatch(removeItem(index));
          }
          }>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ListTodo;
