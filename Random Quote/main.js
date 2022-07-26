const btn = document.querySelector(".generate");
const content = document.querySelector(".content");
const author = document.querySelector(".author");
      


function generateQuote(){
  btn.innerHTML = "Generating...";
  fetch('http://api.quotable.io/random')
    .then(res => res.json())
    .then(result => {
      btn.innerHTML = "Generate Quote";
      content.innerHTML = `${result.content}`;
      author.innerHTML = `By: ${result.author}`;
    })
}



btn.addEventListener("click", generateQuote)
