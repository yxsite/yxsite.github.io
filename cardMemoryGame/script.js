const cards = [
  {
    name: 'Apple',
    image: './images/apple.png',
  },
  {
    name: 'Banana',
    image: './images/banana.png',
  },
  {
    name: 'Cherry',
    image: './images/cherries.png',
  },
  {
    name: 'Lemon',
    image: './images/lemon.png',
  },
  {
    name: 'Mango',
    image: './images/mango.png',
  },
  {
    name: 'Watermelon',
    image: './images/watermelon.png',
  },
  {
    name: 'Apple',
    image: './images/apple.png',
  },
  {
    name: 'Banana',
    image: './images/banana.png',
  },
  {
    name: 'Cherry',
    image: './images/cherries.png',
  },
  {
    name: 'Lemon',
    image: './images/lemon.png',
  },
  {
    name: 'Mango',
    image: './images/mango.png',
  },
  {
    name: 'Watermelon',
    image: './images/watermelon.png',
  }
];
const chosenCard = [];
let chosenCardId = [];
let score = 0;

cards.sort(() => 0.5 - Math.random());

const scoreDisplay = document.querySelector("span#score");
const boardDisplay = document.querySelector("#board");
const wonModal = document.querySelector("#won");


//Game functions

function createBoard(){
  for (let i = 0; i < cards.length; i++) {
    const boardElement = document.createElement('img');
    
    boardElement.setAttribute('src', './images/blank.png');
    boardElement.setAttribute('card-id', i);
    
    boardElement.style.background = 'rgba(0, 0, 0, 0.15)';
    
    boardDisplay.append(boardElement);
    
    boardElement.addEventListener('click', flipCard)
    
  }
}

function flipCard(){
  let cardId = this.getAttribute('card-id')
  this.setAttribute('src', cards[cardId].image);
  
  chosenCard.push(cards[cardId].name);
  chosenCardId.push(cardId);
  
  console.log(chosenCard, chosenCardId)
  
  if(chosenCard.length == 2){
    if(chosenCardId[0] !== chosenCardId[1]){
      setTimeout(CheckMatching, 1000);
      
    }else{
      console.log("dont use the same card")
      clearArr();
      clearArrId();
    }
  }
}

function CheckMatching(){
  const cardSelected = document.querySelectorAll('img');
  
  if(chosenCard[0] === chosenCard[1]){
    score += 1;
    
    cardSelected[chosenCardId[0]].setAttribute('src', 'images/disable.png');
    cardSelected[chosenCardId[1]].setAttribute('src', 'images/disable.png');
    
    
    
    clearArr();
    clearArrId();
    scoreDisplay.innerText = score;
    
  }else{
    
    cardSelected[chosenCardId[0]].setAttribute('src', 'images/blank.png');
    cardSelected[chosenCardId[1]].setAttribute('src', 'images/blank.png');
    
    clearArr();
    clearArrId();
  }
  checkWon();
}

function clearArr(){
  chosenCard.length = 0;
  chosenCard;
}

function clearArrId(){
  chosenCardId.length = 0;
  chosenCardId;
}

function checkWon(){
  if (score === 6) {
    alert("You Won");
    setTimeout(refresh, 5000);
  }
}

function refresh(){
  location.reload();
}

createBoard();
