const displayEle = document.querySelector(".display-screen");
const numEle = document.querySelectorAll(".number");
const opeEle = document.querySelectorAll(".operator");
const clearEle = document.querySelector("#clearBtn");
const delEle = document.querySelector("#delBtn");
const equalEle = document.querySelector("#equalBtn");

// Functions

function addToScreen(ele) {
  displayEle.innerText += ele.innerText;
}

function del() {
  if (displayEle.innerText!=='') {
    displayEle.innerText = displayEle.innerText.slice(0,-1);
  }
}

function hasOpe() {
  let array = displayEle.innerText.split('');
  array.forEach(element => {
    if(!isNaN(element)) { return true; }
  });
  return false;
}

function compute() {
  if (displayEle.innerText!=='') {
    let result = new Function('return ' + displayEle.innerText.replace(/\b0*((\d+\.\d+|\d+))\b/g, "$1"))();
   
    if (result===undefined) {
      result = "Syntax Error";
    }

    displayEle.innerText = result;
  }
}

function clear() {
  displayEle.innerText = '';
}

// Clear Button

clearEle.addEventListener("click", clear);

// Delete Button

delEle.addEventListener("click", del);

// Number Buttons

numEle.forEach(num => {
  num.addEventListener("click", () => {
    addToScreen(num);
  });
});

// Operator Buttons

opeEle.forEach(ope => {
  ope.addEventListener("click", () => {
    if(hasOpe()) {
      compute();
      addToScreen(ope);
    }
    addToScreen(ope);
  });
});

// Equal Button
equalEle.addEventListener("click", () => {
  compute();
});
  