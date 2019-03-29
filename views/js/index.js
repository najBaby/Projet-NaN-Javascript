$(document).ready(function() {
  function load_connect() {
    let login_ref = $("#login");
    login_ref.load("/tools/connecter.html");
  }
  load_connect()
}())

//   function load_register() {
  //     let login_ref = $("#register");
  //     login_ref.load("/tools/inscrire_user.html");
  //   }
  //   load_register()
//   $(document).ajaxStart(function() {
  //     $("#loader").css("display", "flex").load("/tools/loader.html");
  //   })
  //
  //   $(document).ajaxComplete(function() {
    //     $("#loader").css("display", "none")
    //   })
