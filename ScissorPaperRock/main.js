const userShow = document.querySelector(".userShow"),
      enemyShow = document.querySelector(".enemyShow"),
      text = document.querySelector(".result .text"),
      escore = document.querySelector(".enemy-scores span"),
      uscore = document.querySelector(".user-scores span")
      ;

var userScore = 0;
var enemyScore = 0;

function myGame(x){
  function randomAi(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}
    const random = randomAi(1, 3);
    
    if (x == 1 && random == 1){
    score("tie");
    userShow.src = "./imgs/scissor.png";
    enemyShow.src = "./imgs/scissor.png";
  }else if(x == 2 && random == 2){
    score("tie");
    userShow.src = "./imgs/paper.png";
    enemyShow.src = "./imgs/paper.png";
  }else if(x == 3 && random == 3){
    score("tie");
    userShow.src = "./imgs/rock.png";
    enemyShow.src = "./imgs/rock.png";
  }else if(x == 1 && random == 2){
    score("win");
    userShow.src = "./imgs/scissor.png";
    enemyShow.src = "./imgs/paper.png";
  }else if(x == 1 && random == 3){
    score("lose");
    userShow.src = "./imgs/scissor.png";
    enemyShow.src = "./imgs/rock.png";
  }else if(x == 2 && random == 1){
    score("lose");
    userShow.src = "./imgs/paper.png";
    enemyShow.src = "./imgs/scissor.png";
  }else if(x == 2 && random == 3){
    score("win");
    userShow.src = "./imgs/paper.png";
    enemyShow.src = "./imgs/rock.png";
  }else if(x == 3 && random == 1){
    score("win");
    userShow.src = "./imgs/rock.png";
    enemyShow.src = "./imgs/scissor.png";
  }else if(x == 3 && random == 2){
    score("lose");
    userShow.src = "./imgs/rock.png";
    enemyShow.src = "./imgs/paper.png";
  }
}

function score(isUserWin){
    text.innerHTML = isUserWin;
    if(isUserWin == "win"){
      userScore++;
      uscore.innerHTML = "Your Score: " + userScore;
    }else if(isUserWin == "lose"){
      enemyScore++;
      escore.innerHTML = "Enemy Score: " + enemyScore;
    };
}
