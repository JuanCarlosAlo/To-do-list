import { arrayObj } from "../js/const.js";

const container = document.getElementById("container");


const createObj = (value) =>{
  const timeStamp = Date.now();
  const newObject = {
    task: value,
    id: timeStamp,
    checked: false
  }
  arrayObj.push(newObject)
  createCard(arrayObj)
}

const createCard = (arrayObj) => {
  const fragment = document.createDocumentFragment()
  arrayObj.forEach(task=>{
    console.log(task)
    const listItem = document.createElement("div");
    listItem.classList.add("list__item");
    listItem.classList.add("list__item--show");
  
    const inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = task.id;
  
    const labelElement = document.createElement("label");
    labelElement.htmlFor = inputElement.id;
    labelElement.textContent = task.task;
  
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
    
  
    
    listItem.append(inputElement, labelElement, crossIcon);
    fragment.append(listItem);
  })

  container.append(fragment);
};

const objectCheck =(target)=>{
  console.dir(target)
  arrayObj.forEach(element=>{
    if(String(element.id) === target.id){
      if (element.checked) {
        element.checked =false
        target.nextSibling.classList.remove("text-line-through")
        
      }else{
        target.nextSibling.classList.add("text-line-through")
        element.checked =true
      }
    }
   
  })
}

const deleteTask = (crossIcon) => {
  console.log(crossIcon);
  crossIcon.parentElement.remove();
};

container.addEventListener('click', e=>{
  if (e.target.localName === 'input') {
    objectCheck(e.target)
  }
  
})

export { createCard, container, deleteTask ,createObj};
