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
