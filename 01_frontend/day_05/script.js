const firstInput = document.getElementById("input-one");
const secondInput = document.getElementById("input-two");
const buttonClicked = document.getElementById("button-container");
const result = document.getElementById("result");

buttonClicked.addEventListener("click", doTask);

function doTask(e) {
  const firstValue = Number(firstInput.value);
  const secondValue = Number(secondInput.value);
  const operation = e.target.innerText;
  switch (operation) {
    case "Add":
      assignAns(firstValue + secondValue);
      break;
    case "Subtract":
      assignAns(firstValue - secondValue);
      break;
    case "Multiply":
      assignAns(firstValue * secondValue);
      break;
    case "Divide":
      assignAns(firstValue / secondValue);
      break;
    default:
      alert("Wrong Operand");
      break;
  }
}

function assignAns(r) {
  result.innerText = `The result is ${r}`;
}
