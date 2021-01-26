const form = document.querySelector(".js-name-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOW_CN = "show-form";
    

function saveUserName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleNameSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    saveUserName(currentValue);
    paintGreetings(currentValue);
}

function askForName() {
    form.classList.add(SHOW_CN);
    form.addEventListener("submit", handleNameSubmit);
}

function paintGreetings(text){ // What is this 'text' thing? Is it a pre-defined constant?
    form.classList.remove(SHOW_CN);
    greeting.classList.add(SHOW_CN);
    greeting.innerText = `Hi, ${text}!`;
}


function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        // when he has not said his name
        askForName();
    }
    else{
        paintGreetings(currentUser);
    }
}

function init(){
    loadName();
}



init();