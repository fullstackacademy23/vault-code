// Selecting elements from the DOM
const btnCode = document.querySelector(".btn-code");

// *** Aarithmetic operator *** //

// Adding
const add = 5 + 5;

// Substraction
const minus = 50 - 10;

// Multiplying
const multiply = 3 * 13;

// Adding event to button to show code
btnCode.addEventListener("click", () => {
    alert(`Welcome! Vault Code.  ${add}-${minus}-${multiply}`);
});
