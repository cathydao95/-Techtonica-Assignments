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
  console.log("tst");
  currentPictureIndex = (currentPictureIndex + 1) % imgSrcs.length;
  mainPicture.src = imgSrcs[currentPictureIndex];
}

mainPicture.addEventListener("click", changePicture);
