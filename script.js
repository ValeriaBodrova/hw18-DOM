'use strict';
//task1

let myInput = document.getElementById('myInput');
let infoDiv = null;

function createDiv() {
  infoDiv = document.createElement('div');
  infoDiv.textContent = "Інформація про поле";
  infoDiv.id = 'infoDiv';
  //document.body.appendChild(infoDiv);
  myInput.parentNode.insertBefore(infoDiv, myInput.nextSibling);
}

function removeDiv() {
  if (infoDiv) {
    infoDiv.remove();
    infoDiv = null;
  }
}

myInput.addEventListener('focus', createDiv);
myInput.addEventListener('blur', removeDiv);

//task2

//На сторінці є дві кнопки. 
//При натисканні на першу кнопку просимо користувача ввести в prompt посилання, 
//при натисканні на другу - переадресовується на інший сайт 
//(за раніше введеним посиланням). Реалізувати перевірку на http/https. 
//Якщо протокол не вказано - додаємо

//Створити кнопки в html
//створити змінні з цими кнопками через селектор
//функція1 просить промпт і закидає інфо в значення до іншої змінної
// функція2 перевіряє на наявність хттп хттпс і перекидає на сайт


let inputButton = document.getElementById('inputButton');
let redirectButton = document.getElementById('redirectButton');
let link;

inputButton.addEventListener('click', function() {
  link = prompt('Введіть посилання:');
});

redirectButton.addEventListener('click', function() {
  if (link) {
    if (!/^https?:\/\//i.test(link)) {
      link = 'http://' + link;
    }
    window.location.href = link;
  }
});

//task3

//Створити цикл що буде створювати рядки
//створити цикл що буде створювати комірки в середині того,що створює рядки
//змінна, яка за формулою буде фіксувати номер комірки, ітеруючись по кожному рядку переходити на новий десяток
// (цю формулу не сама придумала, це якийсь ту мач складний левел для мене)
//запушити комірку в рядок
//запушити рядок в таблицю

let table = document.getElementById('table');

for (let i = 1; i <= 10; i++) {
  let row = document.createElement('tr');

  
  for (let j = 1; j <= 10; j++) {
    let cell = document.createElement('td');
  
    let number = (i - 1) * 10 + j;
    cell.textContent = number;
    row.appendChild(cell);
  }
  
  table.appendChild(row);
}

//task4

let imagesFolder = 'images/';
let imageCount = 9; // Кількість зображень у папці
let randomIndex = Math.floor(Math.random() * imageCount) + 1;
let imagePath = imagesFolder + randomIndex + '.jpg';

let randomImage = document.getElementById('randomImage');
randomImage.src = imagePath;

