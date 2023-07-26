// Cross of list item when checked
let listItems = document.getElementsByTagName('li')
console.log(listItems)

// check if text-decoration is line-through
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

// change pictures


let mainImg = document.getElementsByTagName('img')

function changeImg(){
  
}

mainImg.addEventListener('click', changeImg)

