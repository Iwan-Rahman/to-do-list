import  './style.css';
import {task, subTask} from './task.js';
import { createTask, deleteTask, getTask, editTask } from './taskDOM';
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


//ID
let taskId = 0;
let projectId = 0;


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
let selectedProject;

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
let generalProject = addProject(defaultProfile, project("General","",'',projectId++));
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
      project.id = projectId++;
      popupTask(project.projectNode);
      selectedProject = project;
      //Create Event Listeners to delete/edit a project
      deleteProject(defaultProfile,project);
      editProject(defaultProfile,project);
      deleteProjectFromLabel(defaultProfile,document.querySelector(".sideboard > div:last-of-type h4:last-of-type"));
      //Add Event Listener to view Project
      viewProject(defaultProfile, document.querySelector(".sideboard > div:last-of-type h4:last-of-type"));
    }

    //Update Local Storage
    setLocalStorage(defaultProfile);
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

    //update Local Storage
    setLocalStorage(defaultProfile);
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

