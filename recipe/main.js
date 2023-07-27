// DOM MANIPULATION 1: Cross of list item when checked
let listItems = document.getElementsByTagName('li')

// check if item is crossed off 
function toggleItem(){
  if (this.style.textDecoration === "line-through"){
    this.style.textDecoration = "none"
    this.style.color = "black"
  } else {
    this.style.textDecoration = "line-through"
    this.style.color = "grey"
  }
}

// loop through each element in HTMLCollection and add event listener to each element and run function toggleItem when clicked
for (let i=0; i<listItems.length; i++){
  listItems[i].addEventListener('click', toggleItem)
}

// DOM MANIPULATION 2: Change pictures
// Create index to go through each index in img array
let i=0;

let imgSrc = [
 "https://www.marionskitchen.com/wp-content/uploads/2019/08/Crispy-Vietnamese-Pancakes4.jpg", "https://www.cooking-therapy.com/wp-content/uploads/2020/05/Banh-Xeo-8-scaled.jpg", "https://takestwoeggs.com/wp-content/uploads/2022/04/Ba%CC%81nh-Xe%CC%80o-Vietnamese-Cre%CC%82pes-Takestwoeggs-Final-Photogrphy-sq.jpg"
]


let mainImg = document.getElementsByClassName('mainImg')

function changeImg(){
  if (i === imgSrc.length -1 ){
    i = 0
  } else {
    i++
  }
  mainImg[0].src = imgSrc[i]
  mainImg.style.object
}

mainImg[0].addEventListener('click', changeImg)

// when click button, show list of recommendations by changing the default css of none to block;

let btn = document.getElementsByClassName('btn')

 let articleSection =
  document.getElementsByTagName('article');

  articleSection[0].style.display = "none";

function showRecs(){
  if (articleSection[0].style.display === "none"){
    console.log('1 going')
    btn[0].style.backgroundColor = "grey";
    btn[0].innerText = "Hide Recommendations";
    articleSection[0].style.display = "block";
  } else {
    console.log('2 going')
    btn[0].style.backgroundColor = "rgb(118, 154, 118)";
    articleSection[0].style.display = "none";
    btn[0].innerText = "Finished Cooking! Show me more recommendations!";
  }
}

btn[0].addEventListener('click', showRecs )