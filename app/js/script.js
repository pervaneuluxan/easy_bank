const hamburger_btn = document.querySelector("#hamburger_btn");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".has_fade");
const body=document.querySelector('body');

hamburger_btn.addEventListener("click", () => {
  if (header.classList.contains("open")) {
    header.classList.remove("open");
    body.classList.remove('noscroll')
    fadeElems.forEach(function (element) {
      element.classList.remove("fade_in");
      element.classList.add("fade_out");
    });
  } else {
    header.classList.add("open");
    body.classList.add('noscroll')
    fadeElems.forEach(function (element) {
      element.classList.remove("fade_out");
      element.classList.add("fade_in");
    });
  }
});
