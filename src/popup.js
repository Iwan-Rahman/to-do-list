export function popUpProject(){

  //Trigger popup form for project
  let newProject = document.querySelector("nav button");
  newProject.addEventListener("click", () => {
    document.querySelector(".popup:last-of-type").style.visibility = "visible";
  })
  
  //Close popup form when clicked away from popup form
  document.querySelector(".popup:last-of-type").addEventListener("click", () => {
    document.querySelector(".popup:last-of-type").style.visibility = "hidden";
  })
  
  document.querySelector(".popup:last-of-type form").addEventListener("click", (e) => {
    e.stopPropagation();
  });
  
}

export function popUpTask(){
  //General Project
  let generalProject = document.querySelector(".project:last-of-type");
  generalProject.addEventListener("dblclick", () => {
  document.querySelector(".popup").style.visibility = "visible";
  })
  
  //Event Listeners for task pop-up form are created with each projectg
  //Refer to ProjectDOM, addProject
  
  //Close popup form when clicked away from popup form
  document.querySelector(".popup").addEventListener("click", () => {
    document.querySelector(".popup").style.visibility = "hidden";
  })
  
  document.querySelector("form").addEventListener("click", (e) => {
    e.stopPropagation();
  });
  
}