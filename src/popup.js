export function popUpProject(){
  
  //Trigger pop-up form for project
  let newProject = document.querySelector("nav button");
  newProject.addEventListener("click", () => {
    document.querySelector(".pop-up").style.visibility = "visible";
  })
  
  //Close pop-up form when clicked away from pop-up form
  document.querySelector(".pop-up").addEventListener("click", () => {
    document.querySelector(".pop-up").style.visibility = "hidden";
  })
  
  document.querySelector("form").addEventListener("click", (e) => {
    e.stopPropagation();
  });
  
}