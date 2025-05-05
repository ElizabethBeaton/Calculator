const add = document.getElementById("add");
const minus = document.getElementById("minus");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const equals = document.getElementById("equals");
const clear = document.getElementById("clear");

add.textContent = "+";
add.style.cursor = "pointer";
add.style.padding = "20px";
add.style.fontSize = "22px";
add.style.borderRadius = "10px";
add.style.border = "none";
add.style.backgroundColor = "#f743dc";

minus.textContent = "-";
add.style.cursor = "pointer";
minus.style.padding = "20px";
minus.style.fontSize = "22px";
minus.style.borderRadius = "10px";
minus.style.border = "none";
minus.style.backgroundColor = "#f743dc";

multiply.textContent = "x";
multiply.style.cursor = "pointer";
multiply.style.padding = "20px";
multiply.style.fontSize = "22px";
multiply.style.borderRadius = "10px";
multiply.style.border = "none";
multiply.style.backgroundColor = "#f743dc";

divide.textContent = "%";
divide.style.cursor = "pointer";
divide.style.padding = "20px";
divide.style.fontSize = "22px";
divide.style.borderRadius = "10px";
divide.style.border = "none";
divide.style.backgroundColor = "#f743dc";

equals.textContent = "=";
equals.style.cursor = "pointer";
equals.style.padding = "20px";
equals.style.fontSize = "22px";
equals.style.borderRadius = "10px";
equals.style.border = "none";
equals.style.backgroundColor = "#f743dc";
equation.addEventListener("click", displayEquation);
// when the equals button is clicked, the displayEquation function is run which opens the <p> which displays the equation

clear.textContent = "clear";
clear.style.cursor = "pointer";
clear.style.padding = "20px";
clear.style.fontSize = "16px";
clear.style.borderRadius = "10px";
clear.style.border = "none";
clear.style.backgroundColor = "#f743dc";

const firstInput = "";
const symbol = "";
const secondInput = "";
const total = "";

function add() {}

function minus() {}

function multiply() {}

function divide() {}

function operate(firstInput, symbol, secondInput) {}

function displayEquation() {
  const equation = document.createElement("p");
  equation.textContent = "";
  equation.style.padding = "14px";
  equation.style.border = "none";
  equaltion.style.backgroundColor = "#ffabe4";
  calculator.appendChild(equation);
}

// add event listener. only if first number is clicked then this box should display
