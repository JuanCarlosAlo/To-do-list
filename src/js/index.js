// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
import { createCard, ulList } from '../js/createCard';

const formElement = document.getElementById('form');
const formInput = document.getElementById('text-input');
const addButton = document.getElementById('add-todo');

formElement.addEventListener('submit', e => {
  e.preventDefault();

  console.dir(formInput.value);
  createCard(formInput.value);
});

ulList.addEventListener('change', e => {
  console.log(e.target);
  if (e.target.tagName === 'INPUT') {
    console.log('hola');
  }
});
