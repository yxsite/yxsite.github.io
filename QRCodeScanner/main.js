const form = document.querySelector("form"),
      formdiv = document.querySelector(".form"),
      fileInp = document.querySelector(".finput"),
      errorClose = document.querySelector(".error-close"),
      successClose = document.querySelector(".success-close"),
      previewImg = document.querySelector(".content img");
      
function apiRequest(qrdata){
  fetch('https://api.qrserver.com/v1/read-qr-code/', {
    method: "POST",
    body: qrdata
  }).then(res => res.json())
    .then(result => {
      // console.log(result);
      let finalResult = result[0].symbol[0].data;
      
      if(finalResult == null){
        errorpop();
      }else{
        succpop();
        document.querySelector(".contents .texts").innerText = finalResult;
        contentShow();
      }
    });
}

fileInp.addEventListener("change", e => {
  let file = e.target.files[0];
  let qrdata = new FormData();
  qrdata.append("file", file);
  apiRequest(qrdata);
})

form.addEventListener("click", () => fileInp.click());



errorClose.addEventListener("click", () => {
  document.querySelector(".error-noti").classList.remove("actived")
})
successClose.addEventListener("click", () => {
  document.querySelector(".success-noti").classList.remove("actived")
})

function errorpop(){
  document.querySelector(".error-noti").classList.add("actived");
  setTimeout(errorPopClose, 3000)
}
function succpop(){
  document.querySelector('.success-noti').classList.add("actived");
  setTimeout(succPopClose, 3000)
}

function errorPopClose(){
  document.querySelector(".error-noti").classList.remove("actived");
}
function succPopClose(){
  document.querySelector(".success-noti").classList.remove("actived");
}
function contentShow(){
  document.querySelector(".contents").classList.add("show")
}
function contentClose(){
  document.querySelector(".contents").classList.remove("show");
}
function copyText(){
  const texts = document.querySelector(".texts").textContent;
  navigator.clipboard.writeText(texts)
}
