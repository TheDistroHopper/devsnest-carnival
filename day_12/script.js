let add = document.getElementById("addButton");
let newInput = document.querySelector(".newInput");
add.addEventListener("click", takeInput);

let arr = Array();
function takeInput() {
  let newInp = document.createElement("div");
  newInp.classList.add("list-item");
  newInp.innerHTML = newInp.value;
}

function makeItem(txt, i) {
  return (
    "<li>\n" +
    txt +
    "\n" +
    "<button id ='del" +
    i +
    "'>Del</button>\n" +
    "<button id ='done" +
    i +
    "'>Done</button>\n" +
    "</li>"
  );
}
