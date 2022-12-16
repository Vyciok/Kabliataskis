"use strict";

const buttons = document.querySelectorAll(".button");

if (buttons.length) {
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      button.classList.toggle("active");

      let blank1 = button.parentNode.firstElementChild;
      let blank2 = blank1.nextElementSibling;
      let director = button.parentNode;
      if(button.classList.contains('active')) {
        director.style.backgroundColor = '#002529';
      } else {
        director.style.backgroundColor = '#012F34';
      }
      
      
      console.log(director);
      console.log(blank1);
      if (blank1 && blank2) {
        blank1.classList.toggle("hidden");
        blank2.classList.toggle("hidden");
        
      }
    });
  });
}
