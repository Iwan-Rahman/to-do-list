import {setSelectedProject} from './index.js';

export function popupProject(){

  //Trigger popup form for project
  let newProject = document.querySelector("nav button");
  newProject.addEventListener("click", () => {
    document.querySelector(".projectForm").style.visibility = "visible";
  })
  
  document.querySelector(".projectForm form").addEventListener("click", (e) => {
    e.stopPropagation();
  });
}

export function closePopups(){
  //Close project popup
  //.popup functions as div in the query selector. Left as popup for readability
  document.querySelector(".projectForm").addEventListener("click", () => {  
    document.querySelector(".projectForm").style.visibility = "hidden";
  })

  //Close task popup
  document.querySelector(".taskForm").addEventListener("click", () => {
    document.querySelector(".taskForm").style.visibility = "hidden";
  })

  //Prevent task popup from closing when clicking on forms
  document.querySelector("form").addEventListener("click", (e) => {
    e.stopPropagation();
  });

  //Close help popup
    document.querySelector(".help").addEventListener("click", () => {
      document.querySelector(".help").style.visibility = "hidden";
  })
}
export function popupTask(project){
  project.projectNode.addEventListener("dblclick", (e) => {
    document.querySelector(".popup").style.visibility = "visible";
    setSelectedProject(project);
  })
}

export function popUpHelp(){
  //Help Screens
  let helpBtn = document.querySelector('nav > ul:last-of-type > li:last-of-type');

  document.querySelector(".popup > div").addEventListener("click", (e) => {
    e.stopPropagation();
  });

  helpBtn.addEventListener("click", () => {
    document.querySelector('.help').style.visibility = 'visible'
  })
}