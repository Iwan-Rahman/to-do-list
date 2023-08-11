import  './style.css';
import {task, subTask} from './task.js';
import { createTask, getTask } from './taskDOM';
import { project } from './project';
import addProject from './projectDOM';
import { popUpProject } from './popup';

// let btnSubmitTask = document.querySelector("form button");
let btnSubmitProject = document.querySelector("form:last-of-type button");


// btnSubmitTask.addEventListener("click", (e) => {
//   document.body.appendChild(createTask(getTask()));
// })
popUpProject();
btnSubmitProject.addEventListener("click", () => {
  if(document.querySelector("form").checkValidity()){
    addProject();
  }
});