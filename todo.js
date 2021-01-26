const toDoForm = document.querySelector(".js-todo-form"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-todo-list");


const TODO_LS = "toDos";

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerHTML = "X";
    const span = document.createElement("span");
    span.innerText = text;

    li.appendChild(delBtn);
    li.appendChild(span);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const currentToDoValue = toDoInput.value;
    paintToDo(currentToDoValue);
    toDoInput.value = "";
}

function loadToDos() {
    const toDos = localStorage.getItem(TODO_LS);
    if(toDos !== null){

    }
    toDoForm.addEventListener("submit", handleToDoSubmit);
}

function init(){
    loadToDos();
}

init();