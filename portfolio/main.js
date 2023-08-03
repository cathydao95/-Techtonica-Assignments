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

function changePicture() {
  currentPictureIndex = (currentPictureIndex + 1) % imgSrcs.length;
  mainPicture.src = imgSrcs[currentPictureIndex];
}

mainPicture.addEventListener("click", changePicture);

// add mouseover effect

let projectItems = document.getElementsByClassName("projectItem");

let projectImages = document.getElementsByClassName("projectImage");

console.log(projectItems);

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
let submitMsgBtn = document.getElementById("submitBtn");

let form = document.getElementsByTagName("form");

let confirmation = document.getElementsByClassName("msgConfirmation");

function changeBtnColor() {
  submitMsgBtn.style.backgroundColor = "grey";
  submitMsgBtn.style.color = "white";
}

function revertBtnColor() {
  submitMsgBtn.style.backgroundColor = "rgb(151, 197, 237)";
}
function sendMessage(e) {
  e.preventDefault();
  form[0].style.display = "none";
  confirmation[0].style.display = "flex";
}

submitMsgBtn.addEventListener("mouseover", changeBtnColor);
submitMsgBtn.addEventListener("mouseleave", revertBtnColor);
submitMsgBtn.addEventListener("click", sendMessage);
