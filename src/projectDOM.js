import { project } from "./project";
import { createTask, getTask } from "./taskDOM";
import profile, {defaultProfile, updateUpcoming, updateProjects} from "./profile";
import {deleteTask} from "./taskDOM";
import {gridSize, getDashboard, setDashboard} from "./index"

export function createProject(projectObj = project("")){
  let projectNode = document.createElement("div");
  projectNode.classList.add("project");

  let projectHeader = document.createElement("div");
  projectHeader.classList.add("project-header");

  let projectName = document.createElement("h4");
  projectName.textContent = projectObj.getName();

  projectHeader.appendChild(projectName);
  projectNode.appendChild(projectHeader);
  
  return {projectObj, projectNode};
}

export function getProject(){
  let projectName = document.querySelector("#projectName").value;

  return project(projectName);
}

export default function addProject(profile = defaultProfile, projectObj = getProject()){
  let projectsMain = document.querySelector(".main");
  let numProjects = document.querySelectorAll(".main > div");
  let projectContainer = document.querySelector(".sideboard > div:last-of-type > div");
  let newProject = createProject(projectObj);
  let projectName = document.createElement("h4");
  projectName.textContent = newProject.projectObj.getName();
  projectContainer.appendChild(projectName);
  profile.getProjects().push(newProject);
  console.log(profile.getProjects());
  if(numProjects.length < gridSize && getDashboard() == true){
      projectsMain.appendChild(newProject.projectNode);
  }
  return newProject;
}

export function deleteProject(profile=defaultProfile,project){
  project.projectNode.addEventListener("contextmenu",(e) => {
    let projectIndex = profile.getProjects().indexOf(project)
    profile.getProjects().splice(projectIndex,1);
    let projectContainer = document.querySelector(".sideboard > div:last-of-type > div");
    projectContainer.querySelector(`h4:nth-child(${projectIndex+2})`).remove();
    e.preventDefault();
    e.target.remove();
    updateProjects(profile)
    updateUpcoming(profile);
  })
}

export function viewProject(profile=defaultProfile, projectLabel){
  projectLabel.addEventListener("click", () => {
    let projectDisplays = document.querySelectorAll('.main > .project');
    let projectLabels = document.querySelectorAll('.sideboard > div:last-of-type h4');
    let projectLabelIndex;
    //Project h4 Index in the sideboard display
    for(let i=1; i < projectLabels.length; i++){
      if(projectLabels[i] == projectLabel){
        projectLabelIndex = i - 1;  //ignore dashboard label
        break;
      }
    }    
    
    //Remove all projects in main
    for(let project of projectDisplays){
      project.remove();
    }
    //Add the project display to main
    document.querySelector('.main').appendChild(profile.getProjects()[projectLabelIndex].projectNode)
    
    let projectDisplay = document.querySelector('.main > div')
    //Add all of the tasks in the project to the display
    for(let task of profile.getProjects()[projectLabelIndex].projectObj.getTasks()){
      projectDisplay.appendChild(task.taskNode);
    }

    setDashboard(false);
  })
}

export function deleteProjectFromLabel(profile=defaultProfile,projectLabel){
    projectLabel.addEventListener("contextmenu", (e) => {
    let projectDisplays = document.querySelectorAll('.main > .project');
    let projectLabels = document.querySelectorAll('.sideboard > div:last-of-type h4');
    let projectLabelIndex;
    //Project h4 Index in the sideboard display
    for(let i=2; i < projectLabels.length; i++){
      if(projectLabels[i] == projectLabel){
        projectLabelIndex = i - 1; //shift left to 0 index
        break;
      }
    }
    projectLabel.remove();
    //remove project from main
    for(let project of projectDisplays){
      if(project == projectDisplays[projectLabelIndex]){
        project.remove();
        break
      }
    }
    profile.getProjects().splice(projectLabelIndex,1)
    e.preventDefault();
})
}

export function editProject(profile=defaultProfile, project){
  //Edit project title
  project.projectNode.querySelector("h4").addEventListener("dblclick", (e) => {
    e.target.contentEditable = "true";
    e.stopPropagation();
    e.target.focus();
  })

  //Project h4 Index in the sideboard display
  let projectIndex  = profile.getProjects().indexOf(project) + 2;
  let projectLabel = document.querySelector(`.sideboard > div:last-of-type h4:nth-of-type(${projectIndex})`);

  
  project.projectNode.addEventListener("focusout", (e) => {
    e.target.contentEditable = "false";
    //update content for task
    project.projectObj.setName(project.projectNode.querySelector("h4").textContent);
    projectLabel.textContent = project.projectObj.getName();
  }) 
}