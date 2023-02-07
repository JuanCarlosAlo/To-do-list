// El styles lo importamos aquí, ya se carga después al compilar todo
import "../scss/styles.scss";
import { createCard, container, deleteTask ,createObj} from "../js/createCard";
import { filterList } from "../js/filter.js";

const formElement = document.getElementById("form");
const formInput = document.getElementById("text-input");
const addButton = document.getElementById("add-todo");
const filter = document.getElementById("filter");

formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  createObj(formInput.value);
});

filter.addEventListener("change", (e) => {
  if (e.target.id) {
    filterList(e.target.id ,e.target.checked);
  }
});
