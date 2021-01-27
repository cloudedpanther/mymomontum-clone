const toDoForm = document.querySelector(".js-todo-form"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-todo-list");


const TODO_LS = "toDos";
const toDoArr = [];

function saveToDo() {
    localStorage.setItem(TODO_LS, JSON.stringify(toDoArr));
}

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerHTML = "X";
    const span = document.createElement("span");
    span.innerText = text;
    const newId = toDoArr.length + 1;

    li.appendChild(delBtn);
    li.appendChild(span);
    toDoList.appendChild(li);
    li.id = newId;

    const toDoObj = {
        text: text,
        id: newId
    }
    toDoArr.push(toDoObj);
    saveToDo();
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const currentToDoValue = toDoInput.value;
    paintToDo(currentToDoValue);
    toDoInput.value = "";
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODO_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }
    toDoForm.addEventListener("submit", handleToDoSubmit);
}

function init(){
    loadToDos();
}

init();