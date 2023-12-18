export function project(name){
  let getName = () => name;

  let setName = newName => {name = newName}

  let tasks = [];
  let getTasks = () => tasks;

  return {getName, getTasks,setName}
}
