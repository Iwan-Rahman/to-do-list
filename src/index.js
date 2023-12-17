import  './style.css';
import {task, subTask} from './task.js';
import { createTask, deleteTask, getTask, editTask } from './taskDOM';
import { project } from './project';
import addProject, {deleteProject } from './projectDOM';
import { popUpProject, popUpTask} from './popup';
import { defaultProfile, updateUpcoming } from './profile';

popUpProject();
popUpTask();

//ID
let taskId = 0;
let projectId = 0;

//The current selected project when the new task form is displayed
let selectedProject;

//Add tasks to general
let generalProject = addProject(defaultProfile, project("General","",'',projectId++));
generalProject.projectNode.querySelector("input[type='date']").style.display = 'none';
generalProject.projectNode.addEventListener("dblclick", () => {
document.querySelector(".popup").style.visibility = "visible";
selectedProject = generalProject;
})

let btnSubmitProject = document.querySelector(".popup:last-of-type button");
btnSubmitProject.addEventListener("click", () => {
  //Checks if all of the html form requirements are filled
  if(document.querySelector(".popup:last-of-type form").checkValidity()){
    //A new project is able to be added to main
      let project  = addProject();
      project.id = projectId++;
      project.projectNode.addEventListener("dblclick", (e) => {
      document.querySelector(".popup").style.visibility = "visible";
      selectedProject = project;
      })

      //Create Event Listeners to delete a project
      deleteProject(defaultProfile,project);
    }


  }
);


let btnSubmitTask = document.querySelector("form button");
btnSubmitTask.addEventListener("click", () => {
  //Checks if all of the html form requirements are filled
  if(document.querySelector("form").checkValidity()){
    let task = createTask(getTask());
    task.taskObj.setID(taskId++);
    task.taskNode.addEventListener("dblclick", (e) => {
      e.stopPropagation();
    })
    task.taskNode.addEventListener("mouseenter",(e) => {
      task.taskNode.style.backgroundColor = "thistle";
    })
    task.taskNode.addEventListener("mouseleave",(e) => {
      task.taskNode.style.backgroundColor = "white";
    })
    task.taskNode.addEventListener("click", () => {
      if(task.taskNode.style.textDecoration == "line-through"){
        task.taskNode.style.textDecoration = "none";
      }else{
        task.taskNode.style.textDecoration = "line-through";
      }
    })

    //Appends task object to a list of task and a tasknode to the project node
    selectedProject.projectNode.appendChild(task.taskNode);
    selectedProject.projectObj.getTasks().push(task);

    //create event listeners to delete and edit task
    deleteTask(task, selectedProject);
    editTask(task);

    //Update sideboard
    updateUpcoming(defaultProfile);
  }
})