import {setSelectedProject} from './index.js';

export function popupProject(){

  //Trigger popup form for project
  let newProject = document.querySelector("nav button");
  newProject.addEventListener("click", () => {
    document.querySelector("div:nth-of-type(4)").style.visibility = "visible";
  })
  
  document.querySelector("div:nth-of-type(4) form").addEventListener("click", (e) => {
    e.stopPropagation();
  });
}

export function closePopups(){
  //Close project popup
  //.popup functions as div in the query selector. Left as popup for readability
  document.querySelector("div:nth-of-type(4)").addEventListener("click", () => {  
    document.querySelector("div:nth-of-type(4)").style.visibility = "hidden";
  })

  //Close task popup
  document.querySelector(".popup").addEventListener("click", () => {
    document.querySelector(".popup").style.visibility = "hidden";
  })

  //Prevent task popup from closing when clicking on forms
  document.querySelector("form").addEventListener("click", (e) => {
    e.stopPropagation();
  });

  //Close help popup
    document.querySelector(".popup.help").addEventListener("click", () => {
      document.querySelector(".popup.help").style.visibility = "hidden";
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
    document.querySelector('div:nth-of-type(5)').style.visibility = 'visible'
  })
}