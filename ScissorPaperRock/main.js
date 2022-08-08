const userShow = document.querySelector(".userShow"),
      enemyShow = document.querySelector(".enemyShow"),
      text = document.querySelector(".result .text")
      
      ;

function myGame(x){
  
  function randomAi(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}
    const random = randomAi(1, 3);
    
    if (x == 1 && random == 1){
    text.innerText = "Tie!"
    userShow.src = "./imgs/scissor.png";
    enemyShow.src = "./imgs/scissor.png";
  }else if(x == 2 && random == 2){
    text.innerText = "Tie!"
    userShow.src = "./imgs/paper.png";
    enemyShow.src = "./imgs/paper.png";
  }else if(x == 3 && random == 3){
    text.innerText = "Tie!"
    userShow.src = "./imgs/rock.png";
    enemyShow.src = "./imgs/rock.png";
  }else if(x == 1 && random == 2){
    text.innerText = "You Won!";
    userShow.src = "./imgs/scissor.png";
    enemyShow.src = "./imgs/paper.png";
  }else if(x == 1 && random == 3){
    text.innerText = "You lose!";
    userShow.src = "./imgs/scissor.png";
    enemyShow.src = "./imgs/rock.png";
  }else if(x == 2 && random == 1){
    text.innerText = "You lose!";
    userShow.src = "./imgs/paper.png";
    enemyShow.src = "./imgs/scissor.png";
  }else if(x == 2 && random == 3){
    text.innerText = "You Won!";
    userShow.src = "./imgs/paper.png";
    enemyShow.src = "./imgs/rock.png";
  }else if(x == 3 && random == 1){
    text.innerText = "You Won!";
    userShow.src = "./imgs/rock.png";
    enemyShow.src = "./imgs/scissor.png";
  }else if(x == 3 && random == 2){
    text.innerText = "You lose!";
    userShow.src = "./imgs/rock.png";
    enemyShow.src = "./imgs/paper.png";
  }
}
