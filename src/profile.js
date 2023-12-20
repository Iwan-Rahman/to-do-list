import { task } from "./task";
import { gridSize } from "./index";

export let profile = (projects = []) => {
  let getProjects = () => projects
  let getAllTasks = () => {
    let tasks = [];
    for(let project of getProjects()){
      tasks.push(project.projectObj.getTasks());
    }
    tasks = tasks.flat();
    return tasks;
  }
  
  return {getProjects, getAllTasks}
}

export let defaultProfile = profile();


export function updateUpcoming(profile){
  //Sorts the task array by date  
  let tasks = profile.getAllTasks();
    
    let n = tasks.length;
    sortByTime(tasks, n);
    updateUpcomingDOM(tasks, 5);
}

function sortByTime(tasks, n){
  let i, key, j;
  for(i = 1; i < n; i++){
    key = tasks[i];
    j = i - 1;

    while(j >= 0 && tasks[j].taskObj.getDeadline() > key.taskObj.getDeadline()){
      tasks[j + 1] = tasks[j];
      j -= 1;
    }
    tasks[j + 1] = key;
  }
}

//Requires sorted tasks array
//Requires number of tasks to display in DOM
function updateUpcomingDOM(tasks, n){
  clearUpcomingDOM();
  n = tasks.length > 3 ? 3 : tasks.length;
  let upcoming = document.querySelector(".sideboard > div > div")
  for(let i = 0 ; i < n; i++){
    let taskCopy = tasks[i].taskNode.cloneNode(true);
    upcoming.appendChild(taskCopy);
  }
}

function clearUpcomingDOM(){
  let tasks = document.querySelectorAll(".sideboard > div:first-of-type .task");
  for(let task of tasks){
    task.remove();
  }
}

export function updateProjects(profile){
  for(let i = 1; i < profile.getProjects().length && i < gridSize; i++){
    document.querySelector(".main").appendChild(profile.getProjects()[i].projectNode);
  }
}


export function setLocalStorage(profile){
  //clear previous local storage
  localStorage.clear();
  //Flatten All Projects
  let projectNames = profile.getProjects().map((x) => x.projectObj.getName()); //;; is used as part of a delimter
  let tasks = [];
  for(let project of profile.getProjects()){
    tasks.push(project.projectObj.getTasks());
  }
  let noTasks = tasks.map((x) => x.length);
  tasks = tasks.flat();
  let taskNames = tasks.map((x) => x.taskObj.getName()); //;; is used as part of a delimter
  let taskDescs = tasks.map((x) => x.taskObj.getDesc());
  let taskPriorities = tasks.map((x) => x.taskObj.getPriority());
  let taskDeadlines = tasks.map((x) => x.taskObj.getDeadline());
  localStorage.setItem('theme',document.body.classList.value);
  localStorage.setItem('projectNames',projectNames);
  localStorage.setItem('taskNames',taskNames);
  localStorage.setItem('taskDescs',taskDescs);
  localStorage.setItem('taskPriorities',taskPriorities);
  localStorage.setItem('taskDeadlines',taskDeadlines);
  localStorage.setItem('noTasks',noTasks);
}

export function getLocalStorage(){
  try{
    if(localStorage.getItem('theme') == 'mono'){
      document.body.classList.add('mono');
    }
    //Add Projects
    let projectNames = localStorage.getItem('projectNames');
    projectNames = projectNames.split(',');
    let noTasks = localStorage.getItem('noTasks');

    //Add Tasks Info
    let taskNames = localStorage.getItem('taskNames');
    taskNames = taskNames.split(',');
    console.log(taskNames);

    let taskDescs = localStorage.getItem('taskDescs');
    taskDescs = taskDescs.split(',');
    console.log(taskDescs);

    let taskPriorities = localStorage.getItem('taskPriorities');
    taskPriorities = taskPriorities.split(',');
    console.log(taskPriorities);
    
    let taskDeadlines = localStorage.getItem('taskDeadlines')
    taskDeadlines = taskDeadlines.split(',');
    console.log(taskDeadlines);

  }catch(e){
    console.log('Local Storage is empty or not supported');
  }
}