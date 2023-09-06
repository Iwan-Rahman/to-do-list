export function project(name, desc, deadline, id){
  //Order: Priority-Ordered, Deadline Ordered, Date-Added Ordered 
  let order = "date";

  let getName = () => name;
  let getDesc = () => desc;
  let getDeadline = () => deadline;
  let getOrder = () => order;

  //unqiue id to quickly identify projects
  let getId = () => id;

  let setName = newName => {name = newName}
  let setDesc = newDesc => {name = newDesc}
  let setDeadline = newDeadline => {name = newDeadline}
  let setOrder = (newOrder) => {order = newOrder}

  let tasks = [];
  let getTasks = () => tasks;

  return {getName, getDesc, getDeadline, getTasks, getOrder, setName, setDesc, setDeadline, setOrder}
}
