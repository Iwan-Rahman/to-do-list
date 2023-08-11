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
  switch(newTask.getPriority()){
    case 'low':
      taskPriority.style.backgroundColor = 'green';
      break;
    case 'moderate':
      taskPriority.style.backgroundColor = 'yellow';
      break;
    case 'high':
      taskPriority.style.backgroundColor = 'red';
      break;
  }

  taskNode.appendChild(taskName);
  taskNode.appendChild(taskPriority);
  taskNode.appendChild(taskDeadline);
  taskNode.appendChild(taskDesc);

  return taskNode;
}

export function getTask(){
  let taskName = document.querySelector("#taskName").value;
  let taskDesc = document.querySelector("#taskDesc").value;
  let taskDate = document.querySelector("#taskDate").value;
  let taskPriority = document.querySelector("#taskPriority").value;

  return task(taskName,taskDesc,taskDate,taskPriority);
}

export function addTask(project){
  project.appendChild(createTask(getTask()));
}