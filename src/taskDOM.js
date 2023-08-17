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

export function deleteTask(task){
      //Deletes the task when right-clicked
      task.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        task.remove();
      })
}

export function editTask(task){
      //Edit task title
      task.querySelector("h4").addEventListener("dblclick", (e) => {
        e.target.contentEditable = "true";
        e.stopPropagation();
        e.target.focus();
      })
  
      //Edit task description
      task.querySelector("p").addEventListener("dblclick", (e) => {
        e.target.contentEditable = "true";
        e.stopPropagation();
        e.target.focus();
      })
  
      //Edit Priority
      task.querySelector("div").addEventListener("dblclick",(e) => {
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
      task.addEventListener("focusout", (e) => {
        e.target.contentEditable = "false";
      })

      //Displays a priority select input
      function priorityInput(e){
        let priority =  task.querySelector("select");
        switch(priority.value){
          case 'low':
            alert(priority.value);
            task.querySelector("div").style.backgroundColor = 'green';
            break;
          case 'moderate':
            alert(priority.value);
            task.querySelector("div").style.backgroundColor = 'yellow';
            break;
          case 'high':
            alert(priority.value);
            task.querySelector("div").style.backgroundColor = 'red';
            break;
        }
        priority.remove();
      }
}