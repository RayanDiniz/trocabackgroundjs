const body = document.querySelector("body");
const span = document.querySelector("span");
const btn = document.getElementById("btn");

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

btn.addEventListener("click", troca);

function troca() {
  let hexColor = "#";
  for(let i=0; i<6; i++) {
    hexColor += hex[number()];
  }
  body.style.backgroundColor = hexColor;
  span.textContent = hexColor;
}

function number() {
  return Math.floor(Math.random() * hex.length);
}