const calcDisplay = document.getElementById('calcDisplay');

function appendInput(input) {
  calcDisplay.value += input;
}

function calculateResult() {
  const expression = calcDisplay.value;
  let result;

  try {
    result = eval(expression);
  } catch (error) {
    result = 'Invalid Expression';
  }

  calcDisplay.value = result;
}

function clearDisplay() {
  calcDisplay.value = '';
}
