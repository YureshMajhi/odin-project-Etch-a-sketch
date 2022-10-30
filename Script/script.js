let board = document.querySelector(".board");
let color = "black";
let click = false;

document.addEventListener("DOMContentLoaded", function () {
  boardCreation(10);

  document.querySelector("body").addEventListener("click", function (e) {
    if (e.target.tagName != "BUTTON") {
      click = !click;
    }
  });
});

function boardCreation(size) {
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let numOfDivs = size * size;
  for (let i = 0; i < numOfDivs; i++) {
    let div = document.createElement("div");
    div.addEventListener("mouseover", colorDiv);
    board.insertAdjacentElement("beforeend", div);
  }
}

document.querySelector("#set-board").addEventListener("click", function () {
  let num = prompt("Set board pixels from 1 to 100");
  if (num <= 100 && num >= 0) {
    boardCreation(num);
  }
});

function colorDiv() {
  if (click) {
    if (color == "random") {
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
      this.style.backgroundColor = "black";
    }
  }
}

function setColor(colorChoice) {
  color = colorChoice;
}

document.querySelector("#reset").addEventListener("click", function () {
  let divs = document.querySelectorAll("div");
  divs.forEach((divs) => (divs.style.backgroundColor = "white"));
});
