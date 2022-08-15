const sum = (a, b) => a + b;
const divide = (a, b) => a / b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;

const output = document.querySelector("#output");

console.log(output.value);

let resetAfterOperation = false;
let firstnumber = 0;
let operation = null;

document.querySelectorAll("#calculator .number").forEach((button) => {
  button.addEventListener("click", (e) => {
    let value = e.currentTarget.innerText;
    if (resetAfterOperation) {
      output.value = value;
      resetAfterOperation = false;
      console.log("resetAfterOperation is false");
    } else {
      output.value += value;
    }
  });
});

document.querySelectorAll("#calculator .operation").forEach((button) => {
  button.addEventListener("click", (e) => {
    firstnumber = Number.parseInt(output.value);
    operation = e.currentTarget.dataset.action;
    console.log(operation);
    resetAfterOperation = true;
    console.log("resetAfterOperation is true");
  });
});

let equal = document.querySelector("#calculator .equal");
equal.addEventListener("click", () => {
  if (!operation) {
    return;
  }
  resetAfterOperation = true;
  let secondnumber = Number.parseInt(output.value, 10);
  if (operation === "sum") {
    output.value = sum(firstnumber, secondnumber);
  } else if (operation === "subtract") {
    output.value = subtract(firstnumber, secondnumber);
  } else if (operation === "multiply") {
    output.value = multiply(firstnumber, secondnumber);
    console.log(output.value);
  } else if (operation === "divide") {
    output.value = divide(firstnumber, secondnumber);
  }
  //reset operation
  operation = null;
});
