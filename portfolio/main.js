// change profile pic
let mainPicture = document.getElementById("mainPic");

let imgSrcs = [
  "./images//girl.png",
  "./images//girl1.png",
  "./images//girl2.png",
  "./images//girl3.png",
  "./images//girl4.png",
];

let currentPictureIndex = 0;
let projectItems = document.getElementsByClassName("projectItem");

let projectImages = document.getElementsByClassName("projectImage");

let submitMsgBtn = document.getElementById("submitBtn");

let form = document.getElementsByTagName("form");

let confirmation = document.getElementsByClassName("msgConfirmation");

let darkModeOn = false;
let navBar = document.querySelector(".nav");
let modeBtn = document.querySelector("#modeBtn");
let contact = document.querySelector("#contact");
let footer = document.querySelector(".footer");

function changePicture() {
  currentPictureIndex = (currentPictureIndex + 1) % imgSrcs.length;
  mainPicture.src = imgSrcs[currentPictureIndex];
}

mainPicture.addEventListener("click", changePicture);

// add mouseover effect

function displayProjectInfo(e) {
  let hoveredElement = e.currentTarget;
  hoveredElement.querySelector(".projectImage").style.opacity = ".25";
  hoveredElement.querySelector(".projectText").style.display = "flex";
}

function hideProjectInfo(e) {
  let hoveredElement = e.currentTarget;
  hoveredElement.querySelector(".projectImage").style.opacity = "1";
  hoveredElement.querySelector(".projectText").style.display = "none";
}

for (item of projectItems) {
  item.addEventListener("mouseover", displayProjectInfo);
  item.addEventListener("mouseleave", hideProjectInfo);
}

// submit button click
function changeBtnColor() {
  submitMsgBtn.style.backgroundColor = "grey";
  submitMsgBtn.style.color = "white";
}

function revertBtnColor() {
  if (darkModeOn) {
    submitMsgBtn.style.backgroundColor = "#394867";
  } else {
    submitMsgBtn.style.backgroundColor = "rgb(151, 197, 237)";
  }
}

function validateForm() {
  let nameInput = document.getElementById("name").value;
  let emailInput = document.getElementById("email").value;
  let messageInput = document.getElementById("message").value;

  if (
    nameInput.trim() === "" ||
    emailInput.trim() === "" ||
    messageInput.trim() === ""
  ) {
    return false;
  }

  return true;
}

function sendMessage(e) {
  e.preventDefault();
  if (validateForm()) {
    form[0].style.display = "none";
    confirmation[0].style.display = "flex";
  } else {
    alert("Name, Email, and Message are required fields.");
  }
}

submitMsgBtn.addEventListener("mouseover", changeBtnColor);
submitMsgBtn.addEventListener("mouseleave", revertBtnColor);
submitMsgBtn.addEventListener("click", sendMessage);

// dark mode

function setDisplayMode() {
  if (darkModeOn) {
    document.body.style.backgroundColor = "rgb(241, 250, 252)";
    document.body.style.color = "black";
    navBar.style.backgroundColor = "rgb(18, 113, 197)";
    contact.style.backgroundColor = "rgb(239, 239, 239)";
    submitMsgBtn.style.backgroundColor = "rgb(151, 197, 237)";
    footer.style.backgroundColor = "rgb(18, 113, 197)";
    modeBtn.style.color = "white";
    modeBtn.style.backgroundColor = "rgb(151, 197, 237)";
    darkModeOn = false;
  } else {
    document.body.style.backgroundColor = "#414141";
    document.body.style.color = "white";
    navBar.style.backgroundColor = "#525252";
    contact.style.backgroundColor = "#313131";
    submitMsgBtn.style.backgroundColor = "#394867";
    footer.style.backgroundColor = "#525252";
    modeBtn.style.color = "white";
    modeBtn.style.backgroundColor = "#394867";
    darkModeOn = true;
  }
}

modeBtn.addEventListener("click", setDisplayMode);
