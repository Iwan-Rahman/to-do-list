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
  
  //Close popup form when clicked away from popup form
  document.querySelector(".popup").addEventListener("click", () => {
    document.querySelector(".popup").style.visibility = "hidden";
  })
  
  document.querySelector("form").addEventListener("click", (e) => {
    e.stopPropagation();
  });
  
}