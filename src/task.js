export function task(name,desc,deadline,priority, id){
  
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

  //unique id to quickly identify tasks
  let getID = () => id;

  let setName = newName => {name = newName}
  let setDesc = newDesc => {name = newDesc}
  let setDeadline = newDeadline => {name = newDeadline}
  let setPriority = newPriority => {priority = newPriority}
  let setType = (newType) => {type = newType}
  let setID = newID => {
    //ID can only be assigned once
    if(id == undefined){
      id = newID;
    }
  }

  let subtasks = [];
  let getSubtasks = () => subtasks;
  return {getName, getDesc, getDeadline, getPriority, getDate, getSubtasks, getType, getID, setName, setDesc, setDeadline, setPriority, setType, setID}
}


export function subtask(name){
  let getName = () => name;
  let setName = (newName) => {name = newName}

  return {getName, setName}
}