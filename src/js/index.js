// El styles lo importamos aquí, ya se carga después al compilar todo
import "../scss/styles.scss";
import { createCard, container, deleteTask, createObj } from "../js/createCard";
import { filterList } from "../js/filter.js";

const formElement = document.getElementById("form");
const formInput = document.getElementById("text-input");
const addButton = document.getElementById("add-todo");
const filter = document.getElementById("filter");
const filterAll = document.getElementById("all");
const filterUndone = document.getElementById("undone");
const filterDone = document.getElementById("done");

formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  createObj(formInput.value);
});

filter.addEventListener("change", (e) => {
  if (e.target.id === "done") {
    filterAll.checked = false;
    filterUndone.checked = false;
    filterList(e.target.id);
  }
  if (e.target.id === "undone") {
    filterAll.checked = false;
    filterDone.checked = false;
    filterList(e.target.id);
  }
  if (e.target.id === "all") {
    filterUndone.checked = false;
    filterDone.checked = false;
    filterList(e.target.id);
  }
});
