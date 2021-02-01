const toDoForm = document.querySelector(".js-todo-form"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-todo-list");


const TODO_LS = "toDos";
let toDoArr = [];
let newId = 1;



function deleteToDo(event) {
    const clickedBtn = event.target;
    const li = clickedBtn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDoArr.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
    });
    toDoArr = cleanToDos;

    saveToDos();

}

function saveToDos() {
    localStorage.setItem(TODO_LS, JSON.stringify(toDoArr));
}

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("i");
    delBtn.classList.add("fas");
    delBtn.classList.add("fa-minus-circle");
    delBtn.classList.add("fa-lg");
    delBtn.addEventListener("click", deleteToDo);
    const span = document.createElement("span");
    span.classList.add("todo-list__todo");
    span.innerText = text;

    li.appendChild(delBtn);  
    li.appendChild(span);
    toDoList.appendChild(li);
    li.id = newId;

    const toDoObj = {
        text: text,
        id: newId
    }
    newId += 1;
    toDoArr.push(toDoObj);
    saveToDos();
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