//Get Form
const form = document.querySelector("form");

//Add tasks to To-Do List
function addTask (task) {
  const toDoList = document.querySelector("#tasks");
  const newTask = document.createElement("li");
  newTask.textContent = task;
  toDoList.appendChild(newTask);
}
//Attach Event Listeners
document.addEventListener("DOMContentLoaded", () => {

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.querySelector("#new-task-description");
    const taskText = input.value.trim();
    if (taskText !== "") {
      addTask(taskText);
    };
  form.reset();
  });

  //Delete tasks from To-Do List
  const toDoList = document.querySelector("#tasks");
  toDoList.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
      event.target.remove();
    }
  });

});