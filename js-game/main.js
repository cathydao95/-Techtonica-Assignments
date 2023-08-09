let playerX = document.querySelector("#xPlayer");
let playerO = document.querySelector("#oPlayer");
let characters = document.querySelector(".characterContainer");
let gameContainer = document.querySelector(".gameContainer");
// BOXES
let boxes = document.getElementsByClassName("box");

// set player 1 or 2

let player1 = "";
let player2 = "";

function setPlayer1(e) {
  if (e.target.id === "xPlayer") {
    player1 = "X";
    player2 = "O";
  } else {
    player1 = "O";
    player2 = "X";
  }
  // characters.style.display = "none";
  // gameContainer.style.display = "flex";
}

playerX.addEventListener("click", setPlayer1);
playerO.addEventListener("click", setPlayer1);

// IMPLEMENT BOX CLICK AND FUNCTIONS

//add event listener to each box
for (box of boxes) {
  box.addEventListener(click, setBox);
}
