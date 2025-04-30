let display = document.getElementById("display");

function insert(value) {
  if (value === '^') {
    display.value += '**';
  } else {
    display.value += value;
  }
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = "Error";
  }
}

function func(fn) {
  try {
    const val = eval(display.value);
    display.value = eval(`${fn}(${val})`);
  } catch {
    display.value = "Error";
  }
}
