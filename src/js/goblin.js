export default function showGoblin(td, array, rand) {
  const img = '<img data-img="img" src="https://github.com/netology-code/ahj-homeworks/raw/master/dom/pic/goblin.png" alt="картинка">';
  array.forEach((el) => {
    el.innerHTML = '';
  });
  td.item(rand).innerHTML = img;
} 

