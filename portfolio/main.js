// VARIABLES
// picture variables
let mainPicture = document.getElementById("mainPic");
let imgSrcs = [
  "./images//girl.png",
  "./images//girl1.png",
  "./images//girl2.png",
  "./images//girl3.png",
  "./images//girl4.png",
];
let currentPictureIndex = 0;

// project info variables
let projectItems = document.getElementsByClassName("projectItem");
let projectImages = document.getElementsByClassName("projectImage");

// contact form variables
let contactTitle = document.querySelector(".contactTitle");
let form = document.getElementsByTagName("form");
let submitMsgBtn = document.getElementById("submitBtn");
let formValidation = document.querySelector(".formValidation");
let confirmation = document.querySelector(".msgConfirmation");
let personName = document.getElementById("name");
let personEmail = document.getElementById("email");
let personMessage = document.getElementById("message");
let personPhone = document.getElementById("number");
let personAddress = document.getElementById("address");
let nameInput = "";
let emailInput = "";
let messageInput = "";
let phoneInput = "";
let addressInput = "";

// dark mode variables
let darkModeOn = false;
let navBar = document.querySelector(".nav");
let modeBtn = document.querySelector("#modeBtn");
let contact = document.querySelector("#contact");
let footer = document.querySelector(".footer");
let aboutBtn = document.querySelector(".aboutBtn");

// FUNCTIONS
// change profile pic colors
function changePicture() {
  currentPictureIndex = (currentPictureIndex + 1) % imgSrcs.length;
  mainPicture.src = imgSrcs[currentPictureIndex];
}

mainPicture.addEventListener("click", changePicture);

// add mouseover effect on project info

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
  nameInput = personName.value;
  emailInput = personEmail.value;
  messageInput = personMessage.value;
  if (
    nameInput.trim() === "" ||
    emailInput.trim() === "" ||
    messageInput.trim() === ""
  ) {
    return false;
  }

  return true;
}

function clearForm() {
  personName.value = "";
  personEmail.value = "";
  personMessage.value = "";
  personAddress.value = "";
  personPhone.value = "";
}

function sendMessage(e) {
  e.preventDefault();
  if (validateForm()) {
    formValidation.style.display = "none";
    confirmation.style.display = "block";
    setTimeout(() => {
      confirmation.style.display = "none";
      clearForm();
    }, 3000);
  } else {
    formValidation.style.display = "block";
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
    aboutBtn.style.backgroundColor = "#394867";
    darkModeOn = true;
  }
}

modeBtn.addEventListener("click", setDisplayMode);
