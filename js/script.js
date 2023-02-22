/* --------------------
 Variables
-------------------- */
let d = document;
let w = window;
let navbar = d.querySelector(".header .flex .navbar");
let menuBtn = d.querySelector("#menu-btn");
let inputNum = d.querySelectorAll('input[type="number"]');

/* --------------------
 Properties
-------------------- */
menuBtn.onclick = () => {
  navbar.classList.toggle("active");
};

w.onscroll = () => {
  navbar.classList.remove("active");
};

inputNum.forEach((inputNumber) => {
  inputNumber.oninput = () => {
    if (inputNumber.value.length > inputNumber.maxLength)
      inputNumber.value = inputNumber.value.slice(0, inputNumber.maxLength);
  };
});

/* --------------------
 AOS Init
-------------------- */
AOS.init({
  duration: 400,
  delay: 200,
});
