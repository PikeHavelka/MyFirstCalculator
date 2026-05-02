const display = document.getElementById("display");

let currentValue = "0";
let previousValue = "";
let operator = "";
let result = 0;

document.addEventListener("click", (event) => {
  const target = event.target;
  const dataType = target.dataset.type;
  const dataValue = target.dataset.value;

  if (target.tagName !== "BUTTON") return;

  switch (dataType) {
    case "number":
      if (currentValue.includes(".") && dataValue === ".") return;
      if (currentValue.slice(0, 1) === "0")
        currentValue = dataValue; // dodělat
      else currentValue += dataValue;
      break;
    case "operator":
      let preVal = Number(previousValue);
      let currVal = Number(currentValue);

      if (dataValue === "=" || operator === "+") {
        result = preVal + currVal;
        currentValue = result;
      } else if (dataValue === "=" || operator === "-") {
        result = preVal - currVal;
        currentValue = result;
      } else if (dataValue === "=" || operator === "*") {
        result = preVal * currVal;
        currentValue = result;
      } else if (
        dataValue === "=" &&
        operator === "/" &&
        currentValue === "0"
      ) {
        currentValue = "Nulou nelze dělit!";
      } else if (dataValue === "=" || operator === "/") {
        result = preVal / currVal;
        currentValue = result;
      } else {
        previousValue = currentValue;
        currentValue = "0";
        operator = dataValue;
      }
      break;
    case "control":
      if (dataValue === "AC") {
        currentValue = "0";
        previousValue = "0";
        operator = "";
        result = 0;
      }
      if (dataValue === "C") currentValue = "0";
      if (dataValue === "DEL") currentValue = currentValue.slice(0, -1) || "0";
      break;
  }

  display.value = currentValue;

  console.log(currentValue, previousValue, operator, result);
});
