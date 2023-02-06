const ulList = document.getElementById('ul-lists');

const timeStamp = Date.now();

const createCard = value => {
  const listItem = document.createElement('li');
  listItem.classList.add('list__item');

  const inputElement = document.createElement('input');
  inputElement.type = 'checkbox';
  inputElement.id = timeStamp;

  const labelElement = document.createElement('label');
  labelElement.htmlFor = inputElement.id;
  labelElement.textContent = value;

  const crossIcon = document.createElement('img');
  crossIcon.src = 'assets/images/icon-cross.svg';
  crossIcon.classList.add('cross-icon');
  console.log(listItem);

  listItem.append(inputElement, labelElement, crossIcon);

  ulList.append(listItem);
};

export { createCard, ulList };
