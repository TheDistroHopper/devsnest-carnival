const form = document.getElementById("form");
const input = document.getElementById("input");
const workUL = document.getElementById("work");

const work = JSON.parse(localStorage.getItem("work"));

if (work) {
  work.forEach((todo) => {
    addTodo(todo);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  addTodo();
});

function addTodo(todo) {
  let todoText = input.value;

  if (todo) {
    todoText = todo.text;
  }

  if (todoText) {
    const todoEl = document.createElement("li");
    if (todo && todo.completed) {
      todoEl.classList.add("completed");
    }

    todoEl.innerText = todoText;

    todoEl.addEventListener("click", () => {
      todoEl.classList.toggle("completed");

      updateLS();
    });

    todoEl.addEventListener("contextmenu", (e) => {
      e.preventDefault();

      todoEl.remove();

      updateLS();
    });

    workUL.appendChild(todoEl);

    input.value = "";

    updateLS();
  }
}

function updateLS() {
  const workEl = document.querySelectorAll("li");

  const work = [];

  workEl.forEach((todoEl) => {
    work.push({
      text: todoEl.innerText,
      completed: todoEl.classList.contains("completed"),
    });
  });

  localStorage.setItem("work", JSON.stringify(work));
}
