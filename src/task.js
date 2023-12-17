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
  let setDesc = newDesc => {desc = newDesc}
  let setDeadline = newDeadline => {deadline = newDeadline}
  let setPriority = newPriority => {priority = newPriority}
  let setType = (newType) => {type = newType}
  let setID = newID => {
    //ID can only be assigned once
    if(id == undefined){
      id = newID;
    }
  }
  return {getName, getDesc, getDeadline, getPriority, getDate, getType, getID, setName, setDesc, setDeadline, setPriority, setType, setID}
}
