const container = document.getElementById("container");

const timeStamp = Date.now();

const createCard = (value) => {
  const listItem = document.createElement("div");
  listItem.classList.add("list__item");
  listItem.classList.add("list__item--show");

  const inputElement = document.createElement("input");
  inputElement.type = "checkbox";
  inputElement.id = timeStamp;

  const labelElement = document.createElement("label");
  labelElement.htmlFor = inputElement.id;
  labelElement.textContent = value;

  const crossIcon = document.createElement("img");
  crossIcon.src = "assets/images/icon-cross.svg";
  crossIcon.classList.add("cross-icon");
  crossIcon.dataset.cross = "cross";

  crossIcon.addEventListener(
    "click",
    (e) => {
      listItem.remove();
    },
    { once: true }
  );
  inputElement.addEventListener("change", (e) => {
    if (e.target.checked) {
      labelElement.classList.add("text-line-through");
    } else {
      labelElement.classList.remove("text-line-through");
    }
  });

  listItem.append(inputElement, labelElement, crossIcon);
  container.append(listItem);
};

const deleteTask = (crossIcon) => {
  console.log(crossIcon);
  crossIcon.parentElement.remove();
};

export { createCard, container, deleteTask };
