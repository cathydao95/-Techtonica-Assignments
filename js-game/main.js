let playerX = document.querySelector("#xPlayer");
let playerO = document.querySelector("#oPlayer");
let characters = document.querySelector(".characterContainer");
let gameContainer = document.querySelector(".gameContainer");
// BOXES
let boxes = document.getElementsByClassName("box");

// set player 1 or 2
let player1Turn = true;
let player1 = "";
let player2 = "";

const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];

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
function checkWinner(player) {
  for (let combo of winCombos) {
    // destructure each element in combo
    const [a, b, c] = combo;
    // check boxes array and check if box elements at index(combo) all equal player
    if (
      boxes[a].textContent === player &&
      boxes[b].textContent === player &&
      boxes[c].textContent === player
    ) {
      console.log("winner");
    } else {
      console.log("lol doesnt work");
    }
  }
}

function markBox(e) {
  if (player1Turn) {
    console.log("text");
    e.target.textContent = player1;
    checkWinner(player1);

    player1Turn = false;
  } else {
    e.target.textContent = player2;
    checkWinner(player2);
    player1Turn = true;
  }
}

//add event listener to each box
for (box of boxes) {
  box.addEventListener("click", markBox);
}
