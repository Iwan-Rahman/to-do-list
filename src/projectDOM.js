import { project } from "./project";

export function createProject(newproject = project("","", new Date())){
  let projectNode = document.createElement("div");
  projectNode.classList.add("project");

  let projectHeader = document.createElement("div");
  projectHeader.classList.add("project-header");

  let projectName = document.createElement("h4");
  projectName.textContent = newproject.getName();

  let projectDesc = document.createElement("p");
  projectDesc.textContent = newproject.getDesc();

  let projectDeadline = document.createElement("input");
  projectDeadline.type = 'date';
  projectDeadline.value = newproject.getDeadline();

  projectHeader.appendChild(projectName);
  projectHeader.appendChild(projectDeadline);
  projectHeader.appendChild(projectDesc);
  projectNode.appendChild(projectHeader);
  return projectNode;
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

  if(numProjects.length < 4){
      projectsMain.appendChild(createProject(getProject()));
      let project = document.querySelector(".project:last-of-type");
      project.addEventListener("dblclick", () => {
      document.querySelector(".popup").style.visibility = "visible";
})
  }

  document.querySelector(".popup:last-of-type").style.visibility = "hidden";
}