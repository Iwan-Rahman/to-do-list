export function task(name,desc,deadline,priority, id){
  
  let dateAdded = new Date();
  
  //Types: None, Ordered, Unordered. 
  //Only applicable if there are subtasks.
  let type = 'none';

  let getName = () => name;
  let getDesc = () => desc;
  let getDeadline = () => deadline;
  let getPriority = () => priority;

  //unique id to quickly identify tasks
  let getID = () => id;

  let setName = newName => {name = newName}
  let setDesc = newDesc => {desc = newDesc}
  let setDeadline = newDeadline => {deadline = newDeadline}
  let setPriority = newPriority => {priority = newPriority}
  let setID = newID => {
    //ID can only be assigned once
    if(id == undefined){
      id = newID;
    }
  }
  return {getName, getDesc, getDeadline, getPriority, getID, setName, setDesc, setDeadline, setPriority,setID}
}
