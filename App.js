const inputs = document.querySelectorAll("input[data-number]")

const moveFocusToNextInput = (eventOriginationInputNumber) => {
  if (eventOriginationInputNumber == 4) {
    return;
  }

  inputs[eventOriginationInputNumber + 1].focus();
};

const moveFocusToPreviousInput = (eventOriginationInputNumber) => {
  if (eventOriginationInputNumber == 0) {
    return;
  }

  inputs[eventOriginationInputNumber - 1].focus();
};

const onInputChange = (event) => {
  const inputNumber = parseInt(event.target.getAttribute("data-number"));

  if (event.key === "Backspace") {
    moveFocusToPreviousInput(inputNumber);
    return;
  }

  moveFocusToNextInput(inputNumber);
};

inputs.forEach((input) => {
  input.addEventListener("keyup", onInputChange);
});