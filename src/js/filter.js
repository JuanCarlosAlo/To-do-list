import { container } from "../js/createCard.js";

const filterList = (id) => {
  for (let index = 0; index < container.children.length; index++) {
    if (id === "done") {
      if (container.children[index].children[0].checked === false) {
        container.children[index].classList.toggle("list__item--show");
      }
    }
    if (id === "undone") {
      if (container.children[index].children[0].checked) {
        container.children[index].classList.toggle("list__item--show");
      }
    } else if (id === "all") {
      container.children[index].classList.add("list__item");
    }
  }
};

export { filterList };
