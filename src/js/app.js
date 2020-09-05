/* eslint-disable no-alert */
import showGoblin from './goblin.js';

let countClick = 0;
let countVisible = 0;
let rand = 0;
let td;
let array;

const Intervals = setInterval(() => {
  td = document.querySelectorAll('td');
  array = [...td];
  rand = Math.floor(Math.random() * array.length);
  showGoblin(td, array, rand);
  countVisible++;
  console.log(`Количество гобинов: ${countVisible}, Количество попаданий: ${countClick}`);
  if ((countVisible - countClick) > 5) {
    alert('Игра окончена');
    clearInterval(Intervals);
    td.item(rand).innerHTML = ' ';
  }
}, 1000);

document.addEventListener('mouseover', (event) => {
  const someEventTarget = event.target;
  if (someEventTarget.hasAttribute('class')) {
    someEventTarget.closest('[data-id]').classList.remove('curs');
  }
  if (someEventTarget.dataset.img === 'img') {
    someEventTarget.closest('[data-id]').classList.add('curs');
  }
});

document.addEventListener('click', (event) => {
  const someEventTarget = event.target;
  if (someEventTarget.closest('[data-id]').dataset.id === String(rand)) {
    countClick++;
    td.item(rand).innerHTML = ' ';
  }
});
