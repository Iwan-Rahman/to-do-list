import { project } from "./project";
import { createTask, getTask } from "./taskDOM";
import profile, {defaultProfile, updateUpcoming, updateProjects} from "./profile";
import {deleteTask} from "./taskDOM";
import {gridSize} from "./index"

export function createProject(projectObj = project("","", new Date())){
  let projectNode = document.createElement("div");
  projectNode.classList.add("project");

  let projectHeader = document.createElement("div");
  projectHeader.classList.add("project-header");

  let projectName = document.createElement("h4");
  projectName.textContent = projectObj.getName();

  let projectDesc = document.createElement("p");
  projectDesc.textContent = projectObj.getDesc();

  let projectDeadline = document.createElement("input");
  projectDeadline.type = 'date';
  projectDeadline.value = projectObj.getDeadline();

  projectHeader.appendChild(projectName);
  projectHeader.appendChild(projectDeadline);
  projectHeader.appendChild(projectDesc);
  projectNode.appendChild(projectHeader);
  
  return {projectObj, projectNode};
}

export function getProject(){
  let projectName = document.querySelector("#projectName").value;
  let projectDesc = document.querySelector("#projectDesc").value;
  let projectDate = document.querySelector("#projectDate").value;

  return project(projectName,projectDesc,projectDate);
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
  if(numProjects.length < gridSize){
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



export function viewProject(profile, projectLabel){
  projectLabel.addEventListener("click", () => {
    let projectDisplays = document.querySelectorAll('.main > .project');
    let projectLabels = document.querySelectorAll('.sideboard > div:last-of-type h4');
    let projectLabelIndex;
    //Project h4 Index in the sideboard display corresponds to project id
    for(let i=1; i < projectLabels.length; i++){
      if(projectLabels[i] == projectLabel){
        projectLabelIndex = i - 1;
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
  })
}
