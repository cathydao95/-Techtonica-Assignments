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

function displayProjectInfo() {
  console.log("test");
  this.querySelector(".projectImage").style.opacity = ".25";
  this.querySelector(".projectText").style.display = "block";
}

function hideProjectInfo() {
  this.querySelector(".projectImage").style.opacity = "1";
  this.querySelector(".projectText").style.display = "none";
}

for (item of projectItems) {
  item.addEventListener("mouseover", displayProjectInfo);
  item.addEventListener("mouseleave", hideProjectInfo);
}
