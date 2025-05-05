const add = document.getElementById("add");
const minus = document.getElementById("minus");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const equals = document.getElementById("equals");
const clear = document.getElementById("clear");
const calculator = document.getElementById("calculator")

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btn0 = document.getElementById("btn0");

btn1.addEventListener("click", handleNumberClick);
btn2.addEventListener("click", handleNumberClick);
btn3.addEventListener("click", handleNumberClick);
btn4.addEventListener("click", handleNumberClick);
btn5.addEventListener("click", handleNumberClick);
btn6.addEventListener("click", handleNumberClick);
btn7.addEventListener("click", handleNumberClick);
btn8.addEventListener("click", handleNumberClick);
btn9.addEventListener("click", handleNumberClick);
btn0.addEventListener("click", handleNumberClick);

add.textContent = "+";
add.style.cursor = "pointer";
add.style.padding = "20px";
add.style.fontSize = "22px";
add.style.borderRadius = "10px";
add.style.border = "none";
add.style.backgroundColor = "#f743dc";

minus.textContent = "-";
minus.style.cursor = "pointer";
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
// when the equals button is clicked, the displayEquation function is run which opens the <p> which displays the equation

add.addEventListener("click", () => handleSymbolClick("+"));
minus.addEventListener("click", () => handleSymbolClick("-"));
multiply.addEventListener("click", () => handleSymbolClick("x"));
divide.addEventListener("click", () => handleSymbolClick("/"));


clear.textContent = "clear";
clear.style.cursor = "pointer";
clear.style.padding = "20px";
clear.style.fontSize = "16px";
clear.style.borderRadius = "10px";
clear.style.border = "none";
clear.style.backgroundColor = "#f743dc";

// add event listener for digit buttons in div element in html

let firstInput = "";
let symbol = "";
let secondInput = "";

function addSum() {
  return Number(firstInput) + Number(secondInput);
}
function minusSum() {
  return Number(firstInput) - Number(secondInput);
}
function multiplySum() {
  return Number(firstInput) * Number(secondInput);
}
function divideSum() {
  return Number(firstInput) / Number(secondInput);
}


const display = document.getElementById("display");

function operateSum() {
    // calculate first input with the symbol chosen and then the second input
    // if symbol clicked is '+', then add(), else if '-' then minus() etc
    if (symbol === "+") return addSum();
    else if (symbol === "-") return minusSum();
    else if (symbol === "*") return multiplySum();
    else if (symbol === "/") return divideSum();
    return 0
}

function displayEquation() {  
    const result = operateSum();
 //  once the first number is clicked then this box will display
    const equation = document.createElement("p");
    equation.textContent = `${firstInput} ${symbol} ${secondInput} =  ${result}`;
    
    equation.style.padding = "14px";
    equation.style.border = "none";
    equation.style.borderRadius = "10px"
    equation.style.backgroundColor = "#ffabe4";
    document.getElementById("displayOutput").appendChild(equation);

    firstInput = result.toString()
    secondInput = ""
    symbol = ""
}
equals.addEventListener("click", displayEquation);


function handleNumberClick(event) {
  const num = event.target.textContent;

  if (symbol === "") {
    firstInput += num;
  } else {
    secondInput += num;
  }

  const currentEquation = document.getElementById("currentEquation")
  currentEquation.textContent = `${firstInput} ${symbol} ${secondInput}`;
  currentEquation.style.marginTop = "8px"
  currentEquation.style.fontSize = "20px"
  currentEquation.style.textAlign = "center"
  
}

function handleSymbolClick(sym) {
    symbol = sym
  document.getElementById("currentEquation").textContent = `${firstInput} ${symbol} ${secondInput}`;
}


clear.addEventListener("click", () => {
    console.log("cleared!")
    firstInput = "";
    symbol = "";
    secondInput = "" ;
    document.getElementById("currentEquation").textContent = "";
    document.getElementById("displayOutput").textContent = "";
});





// need an eventlistener for the button clicked. can loop through? to apply event listener to all divs


// function for if certain number clicked. loop?