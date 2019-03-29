function connect() {
  var login = document.getElementById("login");
  var connect = document.getElementById("connect");
  var html = document.getElementById("html")
  var main = document.getElementById("main")

  connect.onclick = function(e) {
    e.preventDefault()
    login.style.display = "flex";
    html.style.overflow = "hidden";
    main.style.filter = "blur(2px)";
  }

  window.onclick = function(event) {
    if (event.target == login) {
      login.style.display = "none";
      main.style.filter = "blur(0px)";
      html.style.overflowY = "scroll";
    }
  }
}

connect()
