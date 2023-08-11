import  './style.css';
import {task, subTask} from './task.js';
import { createTask, getTask } from './taskDOM';
import { project } from './project';
import addProject from './projectDOM';
import { popUpProject, popUpTask} from './popup';

// let btnSubmitTask = document.querySelector("form button");
let btnSubmitProject = document.querySelector(".popup:last-of-type button");


popUpProject();
popUpTask();
btnSubmitProject.addEventListener("click", () => {
  if(document.querySelector(".popup:last-of-type form").checkValidity()){
    addProject();
  }
});

let generalProject = document.querySelector(".project:last-of-type");
generalProject.addEventListener("dblclick", () => {
document.querySelector(".popup").style.visibility = "visible";
})