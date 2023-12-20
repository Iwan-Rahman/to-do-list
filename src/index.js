import  './style.css';
import {task, subTask} from './task.js';
import { createTask, deleteTask, getTask, editTask, addTask } from './taskDOM';
import { project } from './project';
import addProject, {deleteProject, deleteProjectFromLabel, editProject, viewProject } from './projectDOM';
import { popupProject, popupTask, closePopups, popUpHelp} from './popup';
import { defaultProfile, updateProjects, updateUpcoming, setLocalStorage,getLocalStorage } from './profile';

//videos
import AddProjectVid from './videos/AddProject.gif';
import AddTaskVid from './videos/addTask.gif';
import EditProjectVid from './videos/EditProject.gif';
import EditTaskVid from './videos/EditTask.gif';
import FinishTaskVid from './videos/FinishTask.gif';
import ViewProjectVid from './videos/ViewProject.gif';
import DeleteProjectVid from './videos/DeleteProject.gif';
import DeleteTaskVid from './videos/DeleteTask.gif';

popupProject();
closePopups();
popUpHelp();
getLocalStorage();


//ID
export let taskId = 0;
export let getTaskID = () => taskId;
export let incTaskID = () => {taskId++};


//Dashboard View
let dashboardView = true;
export let getDashboard = () => dashboardView;
export let setDashboard = (bool) => {dashboardView = bool};

//Set Dashboard Listener
let viewDashboard = ((profile) => {
  document.querySelector('.sideboard > div:last-of-type h4').addEventListener("click",() => {
    let projectDisplays = document.querySelectorAll('.main > .project');
    //Remove all projects in main
    for(let project of projectDisplays){
      project.remove();
    }

    //Create Dashboard View
    let projectDisplay = document.querySelector('.main').appendChild(generalProject.projectNode);
    //Add all of the tasks in the project to the display
    for(let task of generalProject.projectObj.getTasks()){
      projectDisplay.appendChild(task.taskNode);
    }
    updateProjects(profile)
    setDashboard(true);
  })
})(defaultProfile);
//The current selected project when the new task form is displayed
export let selectedProject;
export let getSelectedProject = () => selectedProject;
export let setSelectedProject = (project) => {selectedProject = project}; 

//Change Grid size
export let gridSize = 4;

let gridBtn = document.querySelectorAll("nav > ul:first-of-type > li");


gridBtn[0].addEventListener("click",() => {
  gridSize = 4
})

gridBtn[1].addEventListener("click",() => {
  gridSize = 5
})

gridBtn[2].addEventListener("click",() => {
  gridSize = 6
})



//Add tasks to general
let generalProject = addProject(defaultProfile, project("General","",''));
generalProject.projectNode.addEventListener("dblclick", () => {
document.querySelector(".popup").style.visibility = "visible";
selectedProject = generalProject;
})
viewProject(defaultProfile, document.querySelector(".sideboard > div:last-of-type h4:last-of-type"));



let btnSubmitProject = document.querySelector(".popup:nth-of-type(4) button");
btnSubmitProject.addEventListener("click", () => {
  //Checks if all of the html form requirements are filled
  if(document.querySelector(".popup:nth-of-type(4) form").checkValidity()){
    //A new project is able to be added to main
      let project  = addProject();
    }
  }
);


let btnSubmitTask = document.querySelector("form button");
btnSubmitTask.addEventListener("click", () => {
  //Checks if all of the html form requirements are filled
  if(document.querySelector("form").checkValidity()){
    let task = createTask(getTask());
    addTask(task);
  }
})

//Change Themes
let classic = document.querySelector('nav > ul:last-of-type > li')
let mono = document.querySelector('nav > ul:last-of-type > li + li');

classic.addEventListener("click", () => {
  document.body.classList.remove('mono');
  setLocalStorage(defaultProfile)
})

mono.addEventListener("click", () => {
  document.body.classList.add('mono');
  setLocalStorage(defaultProfile)
})
//Help View

const addProjectGIF = new Image();
addProjectGIF.src = AddProjectVid
document.querySelector('#helpAdd + div').appendChild(addProjectGIF);

const addTaskGIF = new Image();
addTaskGIF.src = AddTaskVid;
document.querySelector('#helpAdd + div + h3 + div').appendChild(addTaskGIF);

const editProjectGIF = new Image();
editProjectGIF.src = EditProjectVid;
document.querySelector("#helpEdit + div").appendChild(editProjectGIF);

const editTaskGIF = new Image();
editTaskGIF.src = EditTaskVid;
document.querySelector('#helpEdit + div + h3 + div').appendChild(editTaskGIF);

const finishTaskGIF = new Image();
finishTaskGIF.src = FinishTaskVid;
document.querySelector(`#helpEdit + div${" + h3 + div".repeat(2)}`).appendChild(finishTaskGIF);


const viewProjectGIF = new Image();
viewProjectGIF.src = ViewProjectVid;
document.querySelector(`#helpEdit + div${" + h3 + div".repeat(3)}`).appendChild(viewProjectGIF);

const deleteProjectGIF = new Image();
deleteProjectGIF.src = DeleteProjectVid;
document.querySelector('#helpDelete + div').appendChild(deleteProjectGIF);

const deleteTaskGIF = new Image();
deleteTaskGIF.src = DeleteTaskVid;
document.querySelector('#helpDelete + div + h3 + div').appendChild(deleteTaskGIF);

