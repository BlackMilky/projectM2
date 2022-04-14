let addButton = document.querySelector(`.addTaskButton`);
let arrOfTasks = [];
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
function addTask(e) {
    let taskInput = document.querySelector(`.inputAddTask`);
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
        let newTask = document.createElement(`div`);
        let divTasks = document.querySelector(`.tasks`);
        let xDiv = document.createElement(`div`);
        let taskSpan = document.createElement(`span`);
        taskSpan.innerText = taskInput.value;
        newTask.append(taskSpan);
        newTask.classList.add(`task`);
        newTask.id = idCounter;
        idCounter++;
        divTasks.append(newTask);
        xDiv.classList.add(`X`);
        xDiv.innerText = `x`;
        newTask.append(xDiv);
        divTasks.style.display = `block`;
    }
}