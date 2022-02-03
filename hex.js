const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// selecting requird elements
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// check for the click event
btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor = hexColor + hex[Math.floor(Math.random()*hex.length)];
  }

// after click change the colortext & body color
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});