import  './style.css';
import {task, subTask} from './task.js';
import { createTask, deleteTask, getTask, editTask } from './taskDOM';
import { project } from './project';
import addProject from './projectDOM';
import { popUpProject, popUpTask} from './popup';

popUpProject();
popUpTask();

//The current selected project when the new task form is displayed
let selectedProject;

//Add tasks to general
let generalProject = document.querySelector(".project:last-of-type");
generalProject.addEventListener("dblclick", () => {
document.querySelector(".popup").style.visibility = "visible";
selectedProject = generalProject;
})

let btnSubmitProject = document.querySelector(".popup:last-of-type button");
btnSubmitProject.addEventListener("click", () => {
  //Checks if all of the html form requirements are filled
  if(document.querySelector(".popup:last-of-type form").checkValidity()){
    //A new project is able to be added to main
    if(addProject()){
      let project = document.querySelector(".project:last-of-type");
      project.addEventListener("dblclick", (e) => {
      document.querySelector(".popup").style.visibility = "visible";
      selectedProject = project;
      })
    }
  }
});



let btnSubmitTask = document.querySelector("form button");
btnSubmitTask.addEventListener("click", () => {
  //Checks if all of the html form requirements are filled
  if(document.querySelector("form").checkValidity()){
    let task = createTask(getTask());
    selectedProject.appendChild(task);
    deleteTask(task);
    editTask(task);
  }
})