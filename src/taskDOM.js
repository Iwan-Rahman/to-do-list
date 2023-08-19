import {task, subTask} from './task.js';

export function createTask(taskObj = task("","", new Date(),"Normal")){
  let taskNode = document.createElement("div");
  taskNode.classList.add("task");

  let taskName = document.createElement("h4");
  taskName.textContent = taskObj.getName();

  let taskDesc = document.createElement("p");
  taskDesc.textContent = taskObj.getDesc();

  let taskDeadline = document.createElement("input");
  taskDeadline.type = 'date';
  taskDeadline.value = taskObj.getDeadline();

  let taskPriority = document.createElement("div");
  switch(taskObj.getPriority()){
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

  return {taskObj, taskNode};
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

export function deleteTask(task){
      //Deletes the task when right-clicked
      task.taskNode.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        task.taskNode.remove();
      })
}

export function editTask(task){
      //Edit task title
      task.taskNode.querySelector("h4").addEventListener("dblclick", (e) => {
        e.target.contentEditable = "true";
        e.stopPropagation();
        e.target.focus();
      })
  
      //Edit task description
      task.taskNode.querySelector("p").addEventListener("dblclick", (e) => {
        e.target.contentEditable = "true";
        e.stopPropagation();
        e.target.focus();
      })
  
      //Edit Priority
      task.taskNode.querySelector("div").addEventListener("dblclick",(e) => {
        e.target.insertAdjacentHTML("afterbegin",
        `
        <select>
        <option value="low">Low</option>
        <option value="moderate">Moderate</option>
        <option value="high">High</option>
        </select>
        `
        )
        e.stopPropagation();
        e.target.querySelector("select").focus();
        e.target.addEventListener("focusout", priorityInput)
      })
      task.taskNode.addEventListener("focusout", (e) => {
        e.target.contentEditable = "false";
      })

      //Displays a priority select input
      function priorityInput(e){
        let priority =  task.taskNode.querySelector("select");
        switch(priority.value){
          case 'low':
            task.taskNode.querySelector("div").style.backgroundColor = 'green';
            break;
          case 'moderate':
            task.taskNode.querySelector("div").style.backgroundColor = 'yellow';
            break;
          case 'high':
            task.taskNode.querySelector("div").style.backgroundColor = 'red';
            break;
        }
        priority.remove();
      }
}