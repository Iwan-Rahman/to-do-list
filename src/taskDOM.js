import {task, subTask} from './task.js';

export function createTask(newTask = task("","", new Date(),"Normal")){
  let taskNode = document.createElement("div");
  taskNode.classList.add("task");

  let taskName = document.createElement("h4");
  taskName.textContent = newTask.getName();

  let taskDesc = document.createElement("p");
  taskDesc.textContent = newTask.getDesc();

  let taskDeadline = document.createElement("input");
  taskDeadline.type = 'date';
  taskDeadline.value = newTask.getDeadline();

  let taskPriority = document.createElement("div");
  taskPriority.textContent = newTask.getPriority();

  taskNode.appendChild(taskName);
  taskNode.appendChild(taskDesc);
  taskNode.appendChild(taskDeadline);
  taskNode.appendChild(taskPriority);
  return taskNode;
}