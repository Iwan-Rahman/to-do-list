import {task} from './task.js';
import { defaultProfile, setLocalStorage, updateUpcoming} from './profile';
import { getSelectedProject, getTaskID , incTaskID} from './index.js';

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

export function addTask(task){
  task.taskObj.setID(getTaskID());
  incTaskID();
  task.taskNode.addEventListener("dblclick", (e) => {
    e.stopPropagation();
  })
  task.taskNode.addEventListener("click", () => {
    if(task.taskNode.style.textDecoration == "line-through"){
      task.taskNode.style.textDecoration = "none";
    }else{
      task.taskNode.style.textDecoration = "line-through";
    }
  })
  
  //Appends task object to a list of task and a tasknode to the project node
  getSelectedProject().projectNode.appendChild(task.taskNode);
  getSelectedProject().projectObj.getTasks().push(task);

  //create event listeners to delete and edit task
  deleteTask(task, getSelectedProject());
  editTask(task);
  
  //Update sideboard
  updateUpcoming(defaultProfile);
  setLocalStorage(defaultProfile);
}

export function deleteTask(task, project){
      //Deletes the task when right-clicked
      task.taskNode.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        e.stopPropagation();
        task.taskNode.remove();
        //delete task obj from project
        let index = project.projectObj.getTasks().findIndex(checkID);
        project.projectObj.getTasks().splice(index, 1);
        updateUpcoming(defaultProfile);

        function checkID(currentTask){
          return currentTask.taskObj.getID() == task.taskObj.getID();
        }

        setLocalStorage(defaultProfile);
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
        //update content for task
        task.taskObj.setName(task.taskNode.querySelector("h4").textContent);
        task.taskObj.setDesc(task.taskNode.querySelector("p").textContent);
        task.taskObj.setPriority(task.taskNode.querySelector("div").textContent);
        task.taskObj.setDeadline(task.taskNode.querySelector("input[type='date']").value);
        task.taskNode.style.textDecoration = "none";
        updateUpcoming(defaultProfile);
        setLocalStorage(defaultProfile);
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