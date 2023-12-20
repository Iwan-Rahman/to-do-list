export function task(name,desc,deadline,priority, id,status = false){
  let getStatus = () => status; //complete => true, incomplete => false
  let setStatus = (finished) => {status = finished};
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
  return {getName, getDesc, getDeadline, getPriority, getID, getStatus, setName, setDesc, setDeadline, setPriority,setID,setStatus}
}
