export function task(name,desc,deadline,priority){
  
  let dateAdded = new Date();
  
  //Types: None, Ordered, Unordered. 
  //Only applicable if there are subtasks.
  let type = 'none';

  let getName = () => name;
  let getDesc = () => desc;
  let getDeadline = () => deadline;
  let getPriority = () => priority;
  let getDate = () => dateAdded;
  let getType = () => type;

  let setName = newName => {name = newName}
  let setDesc = newDesc => {name = newDesc}
  let setDeadline = newDeadline => {name = newDeadline}
  let setPriority = newPriority => {priority = newPriority}
  let setType = (newType) => {type = newType}

  let subtasks = [];
  let getSubtasks = () => subtasks;
  return {getName, getDesc, getDeadline, getPriority, getDate, getSubtasks, getType, setName, setDesc, setDeadline, setPriority, setType}
}


export function subtask(name){
  let getName = () => name;
  let setName = (newName) => {name = newName}

  return {getName, setName}
}