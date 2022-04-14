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
let addTaskInput = document.querySelector(`inputAddTask`);
