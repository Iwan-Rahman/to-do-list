import  './style.css';
import {task, subTask} from './task.js';
import { createTask, getTask } from './taskDOM';
import { project } from './project';
import addProject from './projectDOM';
import { popUpProject, popUpTask} from './popup';

popUpProject();
popUpTask();


let btnSubmitProject = document.querySelector(".popup:last-of-type button");

btnSubmitProject.addEventListener("click", () => {
  if(document.querySelector(".popup:last-of-type form").checkValidity()){
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
let selectedProject = document.querySelector(".project");
btnSubmitTask.addEventListener("click", () => {
  if(document.querySelector("form").checkValidity()){
    alert("selectedProject");
    selectedProject.appendChild(createTask(getTask()));
  }
})