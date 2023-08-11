// set game active
let wordleActive = true;

// create an array of words to randomly choose word
let randomWords = [
  "toast",
  "loved",
  "movie",
  "happy",
  "funky",
  "plate",
  "trees",
];

let randomNumber = Math.floor(Math.random() * randomWords.length);
let word;
let answer;

function generateWord() {
  let randomNumber = Math.floor(Math.random() * randomWords.length);
  word = randomWords[randomNumber];
  answer = word.toUpperCase().split("");
}
// set current row and index guess to 0
let currentRowIndex = 0;
let currentIndexGuess = 0;

let rows = document.querySelectorAll(".row");
let wordBoxes = document.querySelectorAll(".letter");
// turn rows into an array using spread and map through each row to create an array of letters array

// get an array of arrays with each group of div "letter"
let guessedLettersArray = [...rows].map((row) => {
  return row.querySelectorAll(".letter");
});

let wordleResult = document.querySelector(".wordle-result");
let correctWord = document.querySelector(".correct-Word");
let playWordleBtn = document.querySelector(".wordle-btn");

// function to run when "enter" is pressed
function checkGuess() {
  console.log("working 1 ");
  allCorrect = true;

  // set guessed word
  let guessedWord = guessedLettersArray[currentRowIndex];

  // check how many of each answer letter is present
  let answerCounts = {};
  answer.forEach((letter) => {
    answerCounts[letter] = (answerCounts[letter] || 0) + 1;
  });

  console.log(answerCounts);

  // do a first pass to check if any letters are in correct spot and remove 1 from answerCounts
  for (let i = 0; i < answer.length; i++) {
    if (guessedWord[i].textContent.toUpperCase() === answer[i]) {
      answerCounts[guessedWord[i].textContent]--;
    }
  }

  // Do a second pass to checkif letters are present but not on the correct spot and apply colors
  for (let i = 0; i < answer.length; i++) {
    guessedWord[i].style.color = "white";
    // check if letter at index in guessed word is same as letter at index in answer
    if (guessedWord[i].textContent.toUpperCase() === answer[i]) {
      guessedWord[i].style.backgroundColor = "rgb(90,161,93)";
    } else if (
      // check if answer includes letter and if letter has not been accounted for in answerCounts
      // NOTE *** NEED TO FIX THIS BECAUSE SOME TESTS FAILED. FOR EX. WHEN WORD IS "TIMES", AND USER GUESSES "IIMES", THE FIRST I WILL TURN YELLOW BECAUSE "I" IS INCLUDED
      answer.includes(guessedWord[i].textContent.toUpperCase()) &&
      answerCounts[guessedWord[i].textContent] > 0
    ) {
      allCorrect = false;
      guessedWord[i].style.backgroundColor = "rgb(195,172,84";
      answerCounts[guessedWord[i].textContent]--;
    } else {
      guessedWord[i].style.backgroundColor = "rgb(108,113,105)";
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

    // create function to validate key we want

    // if key is backspace and currentIndex isnt 0, clear the index before current and decrease currentIndexGuess
    if (key === "Backspace" && currentIndexGuess !== 0) {
      guessedLettersArray[currentRowIndex][currentIndexGuess - 1].textContent =
        "";
      currentIndexGuess--;
      e.preventDefault();
    }

    // update regex to take into account only characters and not keys such as "tab" "ctrl" "shift"
    if (
      currentIndexGuess < guessedLettersArray[currentRowIndex].length &&
      key.match(/^[a-z]$/) &&
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

function resetGame() {
  currentRowIndex = 0;
  currentIndexGuess = 0;
  wordBoxes.forEach((box) => {
    box.textContent = "";
    box.style.backgroundColor = "";
  });
  wordleResult.textContent = "";
  correctWord.textContent = "";
  wordleActive = true;
  generateWord();
  console.log(answer);

  // remove focus from play again button so that enter doesnt trigger it
  playWordleBtn.blur();
}

document.addEventListener("keydown", handleKeyPress);
playWordleBtn.addEventListener("click", resetGame);

generateWord();

console.log(answer);
