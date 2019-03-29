$(document).ready(function() {
  function load_connectResto() {
    let login_ref = $("#login");
    login_ref.load("/tools/connecterResto.html");
  }
  load_connectResto()
})
