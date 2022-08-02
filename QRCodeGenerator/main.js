const input = document.querySelector(".input"),
    preview = document.querySelector(".preview img"),
    color = document.querySelector(".wrapper .color"),
    bgcolor = document.querySelector(".wrapper .bgcolor"),
    size = document.querySelector(".size-opt"),
    margin = document.querySelector(".margin-opt"),
    format = document.querySelector(".format-opt"),
    downloadBtn = document.querySelector(".download a");
    
function generate(){
  let url = `http://api.qrserver.com/v1/create-qr-code/?data=`,
  data = input.value,
  qrcolor = color.value.replace("#", ""),
  qrbgcolor = bgcolor.value.replace("#", ""),
  qrsize = size.value,
  qrmargin = margin.value,
  qrformat = format.value;
  
  preview.src = `${url}${data}&size=${qrsize}&color=${qrcolor}&bgcolor=${qrbgcolor}&margin=${qrmargin}&format=${qrformat}`;
  
  downloadBtn.href = preview.src;
}

 
function errorcode(){
  preview.src = `http://api.qrserver.com/v1/create-qr-code/?data=Hello%20World!&color=5aa2ff&size=200x200&format=svg`;
}
