const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

// selecting requird elements
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// check for the click event
btn.addEventListener("click", function () {
const randomNumber = Math.floor(Math.random()*colors.length);

// after click change the colortext & body color
color.textContent = colors[randomNumber];
document.body.style.backgroundColor = colors[randomNumber];
});
