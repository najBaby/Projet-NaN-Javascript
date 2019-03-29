let modal = document.getElementsByClassName("modal");
var html = document.getElementById("html")
var main = document.getElementById("main")

function register() {
  var register = document.getElementById("register");
  var registre = document.getElementById("registre");
  registre.onclick = function() {
    register.style.display = "flex";
    html.style.overflow = "hidden";
    main.style.filter = "blur(2px)";
  }
}
register()
