import { container, createCard } from "../js/createCard.js";
import { arrayObj } from "../js/const.js";

const filteredArray = (array,key) =>
arrayObj.filter(value => value.checked === key)

const filterList = (id , checked) => {
  container.innerHTML = ''
  console.log(arrayObj)
 
  

    if (id === "done") {
      const doneTasks = arrayObj.filter(task=>task.checked = true)
      createCard(doneTasks)
    }
    if (id === "undone" && checked) {
      const undoneTasks = arrayObj.filter(task=>task.checked = false)
      createCard(doneTasks)
      
    } else if (id === "all") {
      const allTasks = arrayObj.filter(task=>task)
  createCard(doneTasks)
    }
  
};

export { filterList };
