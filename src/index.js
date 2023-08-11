import  './style.css';
import {task, subTask} from './task.js';
import { createTask, getTask } from './taskDOM';
import { project } from './project';
import { createProject, getProject } from './projectDOM';
import { popUpProject } from './popup';

let btnSubmitTask = document.querySelector("form button");
let btnSubmitProject = document.querySelector("form:last-of-type button");


let projectsMain = document.querySelector(".main");
btnSubmitTask.addEventListener("click", (e) => {
  document.body.appendChild(createTask(getTask()));
})

btnSubmitProject.addEventListener("click", (e) => {
  projectsMain.appendChild(createProject(getProject()));
})

popUpProject();