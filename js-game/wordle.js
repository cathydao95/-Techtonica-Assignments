// WORDLE

let rows = document.querySelectorAll(".row");
let guessedLettersArray = [...rows].map((row) => {
  return row.querySelectorAll(".letter");
});

let word = "paste";
let wordSplit = word.split("");
let userGuess;
let currentRowIndex = 0;
let currentIndexGuess = 0;

console.log(guessedLettersArray[currentRowIndex]);

function checkGuess() {
  let guessedLetters = guessedLettersArray[currentRowIndex];
  // check if word matches word
  for (let i = 0; i < wordSplit.length; i++) {
    if (guessedLetters[i].textContent.toLowerCase() === wordSplit[i]) {
      guessedLetters[i].style.backgroundColor = "green";
    } else if (
      wordSplit.includes(guessedLetters[i].textContent.toLowerCase())
    ) {
      guessedLetters[i].style.backgroundColor = "yellow";
    }
  }
  currentRowIndex++;
  currentIndexGuess = 0;
}

function handleKeyPress(e) {
  console.log(e.key, currentIndexGuess, currentRowIndex);
  // use e.key to find out what key is being pressed
  let key = e.key.toLowerCase();
  // if key is backspace and currentIndex isnt 0, clear the index before current and decrease currentIndexGuess
  if (key === "backspace" && currentIndexGuess !== 0) {
    guessedLettersArray[currentRowIndex][currentIndexGuess - 1].textContent =
      "";
    currentIndexGuess--;
    e.preventDefault();
  }

  if (
    currentIndexGuess < guessedLettersArray[currentRowIndex].length &&
    key.match(/[a-z]/) &&
    key !== "backspace" &&
    key !== "enter"
  ) {
    guessedLettersArray[currentRowIndex][currentIndexGuess].textContent = key;
    currentIndexGuess++;
    e.preventDefault();
  }
  // if user presses enter and current index is at 5, run checkGuess function
  if (key === "enter" && currentIndexGuess === 5) {
    checkGuess();
  }
}

document.addEventListener("keydown", handleKeyPress);
