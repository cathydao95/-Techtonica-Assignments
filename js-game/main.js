// GAME OPTIONS CONTAINER
let optionsContainer = document.querySelector(".options-container");
let games = document.querySelectorAll(".game");

function setGame(e) {
  let game = e.target.classList[1];
  // console.log(game.classList[1]);
  document.querySelector(`#${game}`).style.display = "flex";
  optionsContainer.style.display = "none";
}
games.forEach((game) => {
  game.addEventListener("click", setGame);
});
