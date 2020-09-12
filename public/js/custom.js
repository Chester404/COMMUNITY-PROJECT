$("#show_hide_password a").on("click", function (event) {
  event.preventDefault();
  if ($("#show_hide_password input").attr("type") == "text") {
    $("#show_hide_password input").attr("type", "password");
    $("#show_hide_password i").addClass("fe-eye-off");
    $("#show_hide_password i").removeClass("fe-eye");
  } else if ($("#show_hide_password input").attr("type") == "password") {
    $("#show_hide_password input").attr("type", "text");
    $("#show_hide_password i").removeClass("fe-eye-off");
    $("#show_hide_password i").addClass("fe-eye");
  }
});
