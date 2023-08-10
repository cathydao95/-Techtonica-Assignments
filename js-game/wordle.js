// WORDLE

let rows = document.querySelectorAll(".row");
// turn rows into an array using spread and map through each row to create an array of letters array
let guessedLettersArray = [...rows].map((row) => {
  return row.querySelectorAll(".letter");
});

let wordleActive = true;
let word = "paste";
let wordSplit = word.split("");
// set current row and index guess to 0
let currentRowIndex = 0;
let currentIndexGuess = 0;

console.log(guessedLettersArray[currentRowIndex]);

function checkGuess() {
  let guessedLetters = guessedLettersArray[currentRowIndex];
  allCorrect = true;
  // check if word matches word
  for (let i = 0; i < wordSplit.length; i++) {
    if (guessedLetters[i].textContent.toLowerCase() === wordSplit[i]) {
      guessedLetters[i].style.backgroundColor = "green";
    } else if (
      wordSplit.includes(guessedLetters[i].textContent.toLowerCase())
    ) {
      allCorrect = false;
      guessedLetters[i].style.backgroundColor = "yellow";
    } else {
      allCorrect = false;
    }
  }
  currentRowIndex++;
  currentIndexGuess = 0;

  if (allCorrect) {
    wordleActive = false;
    alert("WINNER");
  } else if (currentRowIndex > 5) {
    wordleActive = false;
    alert("out of turns");
  }
}

function handleKeyPress(e) {
  if (wordleActive) {
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
}

document.addEventListener("keydown", handleKeyPress);
