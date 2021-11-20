const gameContainer = document.getElementById("game");
let cardOne = null
let cardTwo = null
let noClicking = false
const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color,"hidden");

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) {
  if(!event.target.classList.contains("hidden")) return;
  if(noClicking) return
  let currentCard = event.target
  currentCard.classList.remove("hidden")
  console.log("you just clicked", event.target);
  if (cardOne === null){
    cardOne = currentCard
    return
  }
  if(cardTwo === null){
    cardTwo = currentCard
    noClicking = true
  }
  let card1Class = cardOne.className
  let card2Class = cardTwo.className
  if( card1Class === card2Class){
      cardOne.removeEventListener("click", handleCardClick);
      cardTwo.removeEventListener("click", handleCardClick);
      console.log(cardOne.classList.item[0])
      console.log(cardTwo.classList.item[0])
      removeEventListener
      cardOne = null
      cardTwo = null
      console.log("strawberry")
      noClicking = false
      return
      }
  if (card1Class !== card2Class){
    setTimeout(function(){
      cardOne.classList.add("hidden")
      cardTwo.classList.add("hidden")
      cardOne = null
      cardTwo = null
      noClicking = false
    }, 1000)
  }  
}
    //if(cardOne === null && cardTwo === null){
    //  event.target.id ="cardOne"
    //  cardOne = document.getElementById("cardOne")
    //  cardOne.classList.remove("hidden")
    //  console.log("banana")
    //  return}
    //if(cardOne !== null && cardTwo === null){
    //  event.target.classList.remove("hidden")
    //  event.target.id ="cardTwo"
    //  
    //  else{setTimeout(function(){
    //    console.log(cardOne.classList.item[0])
    //    console.log(cardTwo.classList.item[0])
    //    cardOne.classList.add("hidden")
    //    cardOne.removeAttribute.id
    //    cardOne = null
    //    cardTwo.classList.add("hidden")
    //    cardTwo.removeAttribute.id
    //    cardTwo = null
    //    
    //    console.log("apple")    
    //  },2000)}}}     
 
// when the DOM loads
createDivsForColors(shuffledColors);
