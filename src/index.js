import  './style.css';
import {task, subTask} from './task.js';
import { createTask, getTask } from './taskDOM';

// document.body.appendChild(createTask());

let btnSubmit = document.querySelector("button");

btnSubmit.addEventListener("click", (e) => {
  document.body.appendChild(createTask(getTask()));
})