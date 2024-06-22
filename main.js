let buttons = Array.from(
  document.querySelectorAll(".calculator input[type='button']")
);
let display = document.querySelector("input[name='display']");

let start = false;

buttons.forEach((button) => {
  button.onclick = () => {
    if (start) {
      display.value = "";
      start = false;
    }
    if (button.value == "AC") {
      display.value = "";
      return;
    } else if (button.value == "DE") {
      display.value = display.value.slice(0, -1);
      return;
    } else if (button.value == "=") {
      try {
        display.value = eval(display.value);
      } catch (error) {
        alert("Invalid Input");
      }
      start = true;
      return;
    }
    display.value += button.value;
  };
});
