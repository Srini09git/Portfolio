let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  navbar.classList.toggle('open-menu')
  menu.classList.toggle("move");
}

/* Typing animation*/
var typed = new Typed(".typing", {
  strings: ["", "FrontEnd Developer", "Web Desiger", "Graphic Desiger",],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
})


var icon = document.getElementById("icon");
icon.onclick = function () {
  document.body.classList.toggle("dark-theme")
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "/img/icon/moon.png"
  } else {

    icon.src = "/img/icon/sun.png"
  }
}

//email js
function validate() {
  let name = document.querySelector('.name');
  let email = document.querySelector('.email');
  let msg = document.querySelector('.message');
  let sendBtn = document.querySelector('.send-btn');

  sendBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (name.value == "" || email.value == "" || msg.value == "") {
      emptyerror();
    } else {
      sendmail(name.value, email.value, msg.value);
      success();
    }
  })
}
validate();

function sendmail(name, email, msg) {
  emailjs.send("service_7xra2kr", "template_y5t91nj", {
    from_name: email,
    to_name: name,
    message: msg,
  });
}

function emptyerror() {
  swal({
    title: "Oh No...",
    text: "Fields cannot be empty!",
    icon: "error",
  });
}
function success() {
  swal({
    title: "Email sent successfully",
    text: "We try to reply in 24hours",
    icon: "success",
  });
}

// header background change on scroll
let header = document.querySelector('header');

window.addEventListener("scroll", () => {
  header.classList.toggle("header-active", window.scrollY >= 400);
})