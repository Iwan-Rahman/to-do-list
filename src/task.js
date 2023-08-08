export function task(name,desc,deadline,priority){
  
  let getName = () => name;
  let getDesc = () => desc;
  let getDeadline = () => deadline;
  let getPriority = () => priority;

  let setName = newName => {
    name = newName;
  }
  
  let setDesc = newDesc => {
    name = newDesc;
  }
  let setDeadline = newDeadline => {
    name = newDeadline;
  }
  let setPriority = newPriority => {
    priority = newPriority;
  }

  //Types: None, Ordered, Unordered. 
  //Only applicable if there are subtasks.
  let type = 'none';

  let subtasks = [];

  let getSubtasks = () => subtasks;
  let getType = () => type;
  let setType = (newType) => {
    type = newType;
  }

  return {getName, getDesc, getDeadline, getPriority, getSubtasks, getType, setName, setDesc, setDeadline, setPriority, setType}
}


export function subtask(name){
  let getName = () => name;

  let setName = (newName) => {
    name = newName;
  }

  return {getName, setName}
}