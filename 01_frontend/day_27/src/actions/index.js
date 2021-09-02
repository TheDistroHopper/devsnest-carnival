const addItem = (item) => {
  return {
    type: "ADD_ITEM",
    payload: item,
  };
};

const removeItem = (id) => {
  return {
    type: "REMOVE_ITEM",
    payload: id,
  };
};

const loadTodos = () => {
  const v = (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        return response.json();
      })
      .then((todos) => {
        return dispatch({
          type: "LOAD_TODOS",
          payload: todos,
        });
      });
  };
  return v;
};

export { addItem, removeItem, loadTodos };
