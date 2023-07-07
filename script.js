'use strict';
//task1

let myInput = document.getElementById('myInput');
let infoDiv = null;

function createDiv() {
  infoDiv = document.createElement('div');
  infoDiv.textContent = "Інформація про поле";
  infoDiv.id = 'infoDiv';
  document.body.appendChild(infoDiv);
}

function removeDiv() {
  if (infoDiv) {
    infoDiv.remove();
    infoDiv = null;
  }
}

myInput.addEventListener('focus', createDiv);
myInput.addEventListener('blur', removeDiv);
