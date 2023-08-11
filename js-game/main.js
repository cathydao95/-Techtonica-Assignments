// GAME OPTIONS CONTAINER
let optionsContainer = document.querySelector(".options-container");
let games = document.querySelectorAll(".game");

let returnBtns = document.querySelectorAll(".returnBtn");

function setGame(e) {
  let game = e.target.classList[1];
  document.querySelector(`#${game}`).style.display = "flex";
  optionsContainer.style.display = "none";
}
games.forEach((game) => {
  game.addEventListener("click", setGame);
});

// return to game selections

function returnToMain(e) {
  // get parent node of the return button
  let game = e.target.parentNode;
  game.style.display = "none";
  optionsContainer.style.display = "block";
}

returnBtns.forEach((btn) => {
  btn.addEventListener("click", returnToMain);
});
