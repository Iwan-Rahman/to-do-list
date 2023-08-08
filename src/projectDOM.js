import { project } from "./project";

export function createProject(newproject = project("","", new Date())){
  let projectNode = document.createElement("div");
  projectNode.classList.add("project");

  let projectName = document.createElement("h4");
  projectName.textContent = newproject.getName();

  let projectDesc = document.createElement("p");
  projectDesc.textContent = newproject.getDesc();

  let projectDeadline = document.createElement("input");
  projectDeadline.type = 'date';
  projectDeadline.value = newproject.getDeadline();

  projectNode.appendChild(projectName);
  projectNode.appendChild(projectDesc);
  projectNode.appendChild(projectDeadline);
  return projectNode;
}

export function getProject(){
  let projectName = document.querySelector("#projectName").value;
  let projectDesc = document.querySelector("#projectDesc").value;
  let projectDate = document.querySelector("#projectDate").value;

  return project(projectName,projectDesc,projectDate);
}