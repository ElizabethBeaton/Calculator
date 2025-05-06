
// targetting html ids 
const display = document.getElementById("display");
const add = document.getElementById("add");
const minus = document.getElementById("minus");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const equals = document.getElementById("equals");
const clear = document.getElementById("clear");
const calculator = document.getElementById("calculator")

// targetting calculator buttons 
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

// using addEventListener so when calculator number button is clicked, the handleNumberClick function runs
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


const symbols = document.querySelector('.symbols'); // Get the symbols div
// Apply flexbox styles dynamically in JS 
symbols.style.display = 'flex';
symbols.style.justifyContent = 'space-between'; // This will evenly space the buttons from left to right
symbols.style.marginBottom = '20px'; // Optional: Adjust the margin if needed


//decorating symbol buttons
add.textContent = "+";
add.style.cursor = "pointer";
add.style.padding = "24px";
add.style.fontSize = "20px";
add.style.borderRadius = "10px";
add.style.border = "none";
add.style.backgroundColor = "#f743dc";

minus.textContent = "-";
minus.style.cursor = "pointer";
minus.style.padding = "24px";
minus.style.fontSize = "20px";
minus.style.borderRadius = "10px";
minus.style.border = "none";
minus.style.backgroundColor = "#f743dc";

multiply.textContent = "x";
multiply.style.cursor = "pointer";
multiply.style.padding = "24px";
multiply.style.fontSize = "20px";
multiply.style.borderRadius = "10px";
multiply.style.border = "none";
multiply.style.backgroundColor = "#f743dc";

divide.textContent = "%";
divide.style.cursor = "pointer";
divide.style.padding = "24px";
divide.style.fontSize = "20px";
divide.style.borderRadius = "10px";
divide.style.border = "none";
divide.style.backgroundColor = "#f743dc";

equals.textContent = "=";
equals.style.cursor = "pointer";
equals.style.padding = "24px";
equals.style.fontSize = "20px";
equals.style.borderRadius = "10px";
equals.style.border = "none";
equals.style.backgroundColor = "#f743dc";

// When an operator button is clicked, call handleSymbolClick() with the corresponding symbol
add.addEventListener("click", () => handleSymbolClick("+"));
minus.addEventListener("click", () => handleSymbolClick("-"));
multiply.addEventListener("click", () => handleSymbolClick("*"));
divide.addEventListener("click", () => handleSymbolClick("/"));


// styling clear button
clear.textContent = "clear";
clear.style.cursor = "pointer";
clear.style.padding = "24px";
clear.style.fontSize = "20px";
clear.style.borderRadius = "10px";
clear.style.border = "none";
clear.style.backgroundColor = "#f743dc";

// assigning the variables to an empty string to use this later in the clear function
let firstInput = "";
let symbol = "";
let secondInput = "";

// Basic arithmetic functions that convert string inputs to numbers and return the result
function addSum() {             // Add firstInput and secondInput as numbers
    return Number(firstInput) + Number(secondInput);
}
function minusSum() {            // Subtract secondInput from firstInput as numbers
    return Number(firstInput) - Number(secondInput);
}
function multiplySum() {         // Multiply firstInput and secondInput as numbers
  return Number(firstInput) * Number(secondInput);
}
function divideSum() {            // Divide firstInput by secondInput as numbers
    return Number(firstInput) / Number(secondInput);
}

function operateSum() {
    if (symbol === "+") return addSum();           // if symbol chosen is '+', then run the addSum function  
    else if (symbol === "-") return minusSum();
    else if (symbol === "*") return multiplySum();
    else if (symbol === "/") return divideSum();
    return 0
}

// Calculates and displays the result of the current equation, then resets inputs for next operation
function displayEquation() {
    const result = operateSum();
    const equation = document.createElement("p");
    equation.textContent = `${firstInput} ${symbol} ${secondInput} =  ${result}`; /// result from operateSum function, which has the symbol functions

  // styling <p> element
    equation.style.padding = "14px";
    equation.style.border = "none";
    equation.style.borderRadius = "10px";
    equation.style.backgroundColor = "#ffabe4";

  // appends it to the display, and resets inputs for continued use
    document.getElementById("displayOutput").appendChild(equation);
    firstInput = result.toString();
    secondInput = "";
    symbol = "";
}
// this displays the next equations under the first <p> tag.
// when the equals button is clicked, it runs the displayEquation again and therefore dsplays another <p> underneath
equals.addEventListener("click", displayEquation);

//
function handleNumberClick(event) {
  const num = event.target.textContent; // this gets the text of the button i clicked and stores it in a variable called num

  if (symbol === "") {   // checks if a symbol has been chosen yet. if it hasnt been chosen yet then it means youre still entering the first number
    firstInput += num;     // when number chosen, it add the number to the firstInput variable.
  } else {
    secondInput += num;     // if the symbol has been selected, then this means youre about to enter the second number. this here then makes the num input the secondInput value
  }

  // this updates the display so the user can see what theyve entered so far, along with some styling
  const currentEquation = document.getElementById("currentEquation")
  currentEquation.textContent = `${firstInput} ${symbol} ${secondInput}`;
  currentEquation.style.marginTop = "8px"
  currentEquation.style.fontSize = "20px"
  currentEquation.style.textAlign = "center"
  
}

// this runs when a symbol button is clicked (lines 77-80)
function handleSymbolClick(sym) { // this sym parameter is the value passed into the function when its called
    symbol = sym     // this is important - it assigns the value to the global symbol variable, which is used throughout the calcultor logic
  document.getElementById("currentEquation").textContent = `${firstInput} ${symbol} ${secondInput}`;    // this updates the equation display so the user can immediately see what operation theyre setting up
}
/* in the event listeners --- add.addEventListener("click", () => handleSymbolClick("+")); for eg,
its saying 'when the symbol button is clicked, to call    handleSymbolClick() and to pass in the relevant symbol as the sym argument.
so if the add button is clicked, --- handleSymbolClick("+") runs → sym becomes "+"
and then inside the function, ti sets symbol = '+' which is then used in calcuting and displaying the equation
*/

// when clear button is clicked, empty all displays
clear.addEventListener("click", () => {
    console.log("cleared!")
    firstInput = "";
    symbol = "";
    secondInput = "" ;
    document.getElementById("currentEquation").textContent = "";
    document.getElementById("displayOutput").textContent = "";
});




