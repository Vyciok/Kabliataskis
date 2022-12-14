"use strict";
const buttons = document.querySelectorAll(".button");

if (buttons.length) {
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      button.classList.toggle("active");

      let blank1 = button.parentNode.firstElementChild;
      let blank2 = blank1.nextElementSibling;
      console.log(blank1);
      if (blank1 && blank2) {
        blank1.classList.toggle("hidden");
        blank2.classList.toggle("hidden");
      }
    });
  });
}
