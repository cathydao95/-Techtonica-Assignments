// WORDLE
let rows = document.querySelectorAll(".row");
let letters = document.querySelectorAll(".letter");
let test = document.querySelector(".test");

let word = "paste";
let wordSplit = word.split("");
let userGuess;

function checkGuess() {
  // check if word matches word
  for (let i = 0; i < userGuess.length; i++) {
    if (userGuess[i] === wordSplit[i]) {
      userGuess[i].style.backgroundColor = "blue";
    }
  }
}

function setWords(e) {
  console.log(e.target.value);
  userGuess = e.target.value.toLowerCase().split("");
  checkGuess();
}

console.log(userGuess);

test.addEventListener("change", setWords);
