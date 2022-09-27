const container = document.querySelector(".container");
let result1 = document.querySelector("#result1");
let result2 = document.querySelector("#result2");

let num1 = "";
let num2 = "";
let operator = "";

container.addEventListener("click", (event) => {
  if (event.target.classList.contains("number")) {
    num2 += event.target.innerText;
    result1.innerText = num2;
  } else if (event.target.classList.contains("operator-ac")) {
    reset();
  } else if (event.target.classList.contains("operator")) {
    if (num1) {
      if (!num2) {
        alert("Enter a number!");
      } else {
        num1 = calculate(Number(num1), operator, Number(num2));
        if (String(num1).length > 6) {
          num1 = num1.toFixed(6);
        }
        operator = event.target.innerText;
        result2.innerText = num1 + " " + operator;
        result1.innerText = "";
        num2 = "";
      }
    } else {
      num2 = result1.innerText;
      num1 = num2;
      num2 = "";
      operator = event.target.innerText;
      result2.innerText = num1 + " " + operator;
      result1.innerText = "";
    }
  } else if (event.target.classList.contains("equal")) {
    num2 = calculate(Number(num1), operator, Number(num2));
    if (String(num2).length > 6) {
      num2 = num2.toFixed(6);
    }
    result1.innerText = num2;
    result2.innerText = "";
    num1 = "";
    num2 = "";
  }
  if (event.target.id === "minus-plus") {
    num2 *= -1;
    result1.innerText = num2;
  }
  if (event.target.id === "percent") {
    num2 /= 100;
    result1.innerText = num2;
  }
});

function calculate(n1, oper, n2) {
  if (oper === "+") return n1 + n2;
  else if (oper === "-") return n1 - n2;
  else if (oper === "x") return n1 * n2;
  else if (oper === "÷") {
    if (!n2) {
      return "Error";
    } else {
      return n1 / n2;
    }
  }
}

function reset() {
  num1 = "";
  num2 = "";
  operator = "";
  result1.innerText = "";
  result2.innerText = "";
}

console.log(calculate(3, "+", 4));
