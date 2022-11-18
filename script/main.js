let menu = document.querySelector('.menu-icon');

menu.onclick = () =>{
    menu.classList.toggle("move");
}

/* Typing animation*/
var typed = new Typed(".typing",{
 strings: ["","Full Stack Developer", "Web Desiger","Graphic Desiger"],
 typeSpeed:100,
 backSpeed:60,
 loop:true
}) 


var icon =document.getElementById("icon");
icon.onclick = function(){
  document.body.classList.toggle("dark-theme")
  if(document.body.classList.contains("dark-theme")){
    icon.src = "/img/icon/moon.png"
  }else{
    
    icon.src = "/img/icon/sun.png"
  }
}