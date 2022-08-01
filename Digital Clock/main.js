const hoursBox = document.querySelector(".hours h3"),
      minutesBox = document.querySelector(".minutes h3"),
      secondsBox = document.querySelector(".seconds h3"),
      ampmBox = document.querySelector(".am-pm h3");
      
setInterval(() => {
  let date = new Date();
  
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  
  amOrpm = hours < 12 ? "AM" : "PM";
  
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  
  
  hoursBox.innerText = hours;
  minutesBox.innerText = minutes;
  secondsBox.innerText = seconds;
  ampmBox.innerText = amOrpm;
  
  
}, 1000)
