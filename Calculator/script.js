const res = document.getElementById("result");
const toast = document.getElementById("toast");

function calculate(value) {
  const calculatedValue = eval(value || null);
  if (isNaN(calculatedValue)) {
    res.value = "Can't divide 0 with 0";
    setTimeout(() => {
      res.value = "";
    }, 1300);
  } else {
    res.value = calculatedValue;
  }
}

function liveScreen(enteredValue) {
  if (!res.value) {
    res.value = "";
  }
  res.value += enteredValue;
}

document.addEventListener("keydown", keyboardInputHandler);

function keyboardInputHandler(e) {
  e.preventDefault();

  // Numbers
  if (e.key >= "0" && e.key <= "9") {
    res.value += e.key;
  }

  // Operators
  if (["+", "-", "*", "/"].includes(e.key)) {
    res.value += e.key;
  }

  // Decimal key
  if (e.key === ".") {
    res.value += ".";
  }

  // Press enter to see result
  if (e.key === "Enter") {
    calculate(res.value);
  }

  // Backspace for removing the last input
  if (e.key === "Backspace") {
    res.value = res.value.slice(0, -1);
  }
}