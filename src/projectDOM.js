import { project } from "./project";
import { createTask, getTask } from "./taskDOM";
import {defaultProfile} from "./profile";

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

export default function addProject(){
  let projectsMain = document.querySelector(".main");
  let numProjects = document.querySelectorAll(".main > div");
  let projectContainer = document.querySelector(".sideboard > div:last-of-type > div");
  let newProject = createProject(getProject());

  let projectName = document.createElement("h4");
  projectName.textContent = newProject.projectObj.getName();
  projectContainer.appendChild(projectName);
  defaultProfile.projects.push(newProject);
  
  if(numProjects.length < 4){
      projectsMain.appendChild(newProject.projectNode);
  }

  return newProject;
}

