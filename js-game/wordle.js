// WORDLE

let rows = document.querySelectorAll(".row");
// turn rows into an array using spread and map through each row to create an array of letters array

// get letters into an array of arrays
let guessedLettersArray = [...rows].map((row) => {
  return row.querySelectorAll(".letter");
});

let wordleResult = document.querySelector(".wordle-result");
let correctWord = document.querySelector(".correct-Word");

let wordleActive = true;
let word = "paate";
let answer = word.toUpperCase().split("");

// set current row and index guess to 0
let currentRowIndex = 0;
let currentIndexGuess = 0;

function checkGuess() {
  let guessedLetters = guessedLettersArray[currentRowIndex];
  allCorrect = true;

  // check how many of each answer letter is present
  let answerCounts = {};

  answer.forEach((letter) => {
    answerCounts[letter] = (answerCounts[letter] || 0) + 1;
  });

  console.log(answerCounts);

  // check if word matches word
  for (let i = 0; i < answer.length; i++) {
    guessedLetters[i].style.color = "white";
    if (guessedLetters[i].textContent.toUpperCase() === answer[i]) {
      guessedLetters[i].style.backgroundColor = "rgb(90,161,93)";
      answerCounts[guessedLetters[i].textContent]--;
    } else if (
      answer.includes(guessedLetters[i].textContent.toUpperCase()) &&
      answerCounts[guessedLetters[i].textContent] > 0
    ) {
      allCorrect = false;
      guessedLetters[i].style.backgroundColor = "rgb(195,172,84";
      answerCounts[guessedLetters[i].textContent]--;
      console.log("LOOK HERE", i, answerCounts[guessedLetters[i].textContent]);
    } else {
      guessedLetters[i].style.backgroundColor = "rgb(108,113,105)";
      allCorrect = false;
    }
  }
  currentRowIndex++;
  currentIndexGuess = 0;

  if (allCorrect) {
    wordleActive = false;
    wordleResult.textContent = "You Win!";
    correctWord.textContent = `The Correct Word is: ${word.toUpperCase()}`;
  } else if (currentRowIndex > 5) {
    wordleActive = false;
    wordleResult.textContent = "Game Over! Out Of Turns";
    correctWord.textContent = `The Correct Word is: ${word.toUpperCase()}`;
  }
}

function handleKeyPress(e) {
  if (wordleActive) {
    // use e.key to find out what key is being pressed
    let key = e.key;
    console.log(key);
    // if key is backspace and currentIndex isnt 0, clear the index before current and decrease currentIndexGuess
    if (key === "Backspace" && currentIndexGuess !== 0) {
      guessedLettersArray[currentRowIndex][currentIndexGuess - 1].textContent =
        "";
      currentIndexGuess--;
      e.preventDefault();
    }

    if (
      currentIndexGuess < guessedLettersArray[currentRowIndex].length &&
      key.match(/[a-z]/) &&
      key !== "Backspace" &&
      key !== "Enter"
    ) {
      guessedLettersArray[currentRowIndex][currentIndexGuess].textContent =
        key.toUpperCase();
      guessedLettersArray[currentRowIndex][currentIndexGuess].style.color =
        "black";
      currentIndexGuess++;
      e.preventDefault();
    }
    // if user presses enter and current index is at 5, run checkGuess function
    if (key === "Enter" && currentIndexGuess === 5) {
      checkGuess();
    }
  }
}

document.addEventListener("keydown", handleKeyPress);
