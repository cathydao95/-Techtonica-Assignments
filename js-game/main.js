let playerX = document.querySelector("#xPlayer");
let playerO = document.querySelector("#oPlayer");
let characters = document.querySelector(".characterContainer");
let gameContainer = document.querySelector(".gameContainer");
let gameMessage = document.querySelector(".gameMessage");
let player1Wins = document.querySelector(".player1Wins");
let player2Wins = document.querySelector(".player2Wins");
// BOXES
let boxes = document.getElementsByClassName("box");

// set player 1 or 2
let player1Turn = true;
let player1 = "";
let player2 = "";
let gameIsDraw = false;
let winner = "";
let gameActive = true;
let player1Score = 0;
let player2Score = 0;

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
  characters.style.display = "none";
  gameContainer.style.display = "flex";
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
      boxes[a].style.backgroundColor = "green";
      boxes[b].style.backgroundColor = "green";
      boxes[c].style.backgroundColor = "green";
      gameMessage.textContent = `${player} Wins!`;
      winner = player;
      gameActive = false;
      // return true;
    }
  }
  return false;
}

function checkDraw() {
  for (let box of boxes) {
    if (box.textContent === "") {
      return false;
    }
  }
  gameMessage.textContent = "It's a Draw!";
  gameIsDraw = true;
  gameActive = false;
}

function markBox(e) {
  if (gameActive) {
    if (player1Turn) {
      if (e.target.textContent === "") {
        e.target.textContent = player1;
        player1Turn = !player1Turn;
        gameMessage.textContent = `${player2}'s Turn`;
      }
      checkWinner(player1);
      checkDraw();
    } else {
      if (e.target.textContent === "") {
        e.target.textContent = player2;
        player1Turn = !player1Turn;
        checkWinner(player2);
        checkDraw();
        gameMessage.textContent = `${player1}'s Turn`;
      }
    }
  }
}

//add event listener to each box
for (box of boxes) {
  box.addEventListener("click", markBox);
}
