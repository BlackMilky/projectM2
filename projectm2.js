let addButton = document.querySelector(`.addTaskButton`);
let arrOfTasks = [];
let sortDiv = document.querySelector(`.sort`);
sortDiv.addEventListener(`click`, sortElements);
let textXButton = document.querySelector(`.textX`);
let divTasks = document.querySelector(`.tasks`);
textXButton.addEventListener(`click`, (e) => {e.target.previousElementSibling.value = ``;});
addButton.addEventListener(`mouseover`, addHover);
addButton.addEventListener(`mouseout`, removeHover);
function addHover() {
    let addText = document.querySelector(`.plus`);
    addText.style.backgroundColor = `#AA68FE`;
    addText.parentElement.style.backgroundColor = `#9953F1`;
};
function removeHover() {
    let addText = document.querySelector(`.plus`);
    addText.style.backgroundColor = `#9953F1`;
    addText.parentElement.style.backgroundColor = `#833AE0`;
};
let sortButton = document.querySelector(`.sort`);
sortButton.addEventListener(`click`, sortDown);
function sortDown() {
    sortButton.firstElementChild.classList.add(`sortDown`);
    sortButton.firstElementChild.classList.remove(`sortUp`);
    sortButton.removeEventListener(`click`, sortDown);
    sortButton.addEventListener(`click`, sortUp);
};
function sortUp () {
    sortButton.firstElementChild.classList.add(`sortUp`);
    sortButton.firstElementChild.classList.remove(`sortDown`);
    sortButton.removeEventListener(`click`, sortUp);
    sortButton.addEventListener(`click`, sortDown);
};

let addTaskInput = document.querySelector(`.addTaskButton`);
addTaskInput.addEventListener(`click`, addTask);
let idCounter = 0;
let taskInput = document.querySelector(`.inputAddTask`);
function addTask(e) {
    if (taskInput.value.replace(/\s/g,"") == "" || taskInput.value === null || taskInput.value === undefined) {
        document.querySelector(`.error`).style.display = `block`;
        setInterval(() =>{ 
            document.querySelector(`.error`).style.display = `none`;
        }, 5000 );
    } else {
        arrOfTasks.push({
            id: idCounter,
            taskName: taskInput.value
        });
        createTask(taskInput.value, idCounter);
    }
}
function createTask (inputText, divId) {
    let newTask = document.createElement(`div`);
    let xDiv = document.createElement(`div`);
    let taskSpan = document.createElement(`span`);
    taskSpan.innerText = inputText;
    newTask.append(taskSpan);
    newTask.classList.add(`task`);
    newTask.id = divId;
    idCounter++;
    divTasks.append(newTask);
    xDiv.classList.add(`X`);
    xDiv.innerText = `x`;
    xDiv.addEventListener(`click`, removeTask);
    newTask.append(xDiv);
    divTasks.style.display = `block`;
    taskInput.value = ``;
};
function removeTask (e) {
    arrOfTasks.forEach((el, index) => {
        if (el.id === Number(e.target.parentElement.id)) {
            arrOfTasks.splice(index, 1);
        }
    })
    e.target.parentElement.remove();
    if (arrOfTasks.length > 0) {}
    else { divTasks.style.display = `none`;}
}
function sortElements () {
    if (sortDiv.firstElementChild.classList.contains(`sortUp`)) {
        arrOfTasks = arrOfTasks.sort((a, b) => {
            if (a.taskName < b.taskName) {
                return -1;
            }
            if (a.taskName > b.taskName) {
                return 1;
            }
            return 0;
        });
        document.querySelectorAll(`.task`).forEach(el => {el.remove();})
        arrOfTasks.map(value => {createTask(value.taskName, value.id)})
    } else {
        arrOfTasks = arrOfTasks.sort((a, b) => {
            if (a.taskName < b.taskName) {
                return 1;
            }
            if (a.taskName > b.taskName) {
                return -1;
            }
            return 0;
        });
    }
    document.querySelectorAll(`.task`).forEach(el => {el.remove();})
    arrOfTasks.map(value => {createTask(value.taskName, value.id)})
}