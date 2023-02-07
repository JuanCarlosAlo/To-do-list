import { container, createCard } from "../js/createCard.js";
import { arrayObj } from "../js/const.js";

const filterList = (id, checked) => {
  console.log(arrayObj);

  if (id === "done") {
    const doneTasks = arrayObj.filter((task) => task.checked === true);

    createCard(doneTasks);
  }
  if (id === "undone") {
    console.log(arrayObj);
    const undoneTasks = arrayObj.filter((task) => task.checked === false);

    createCard(undoneTasks);
  } else if (id === "all") {
    createCard(arrayObj);
  }
};

export { filterList };
