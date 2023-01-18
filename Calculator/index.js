let display = document.getElementById("display");
let current = "";

function addToDisplay(value) {
  current += value;
  display.value = current;
}

function calculate() {
  display.value = eval(current);
  current = "";
}
