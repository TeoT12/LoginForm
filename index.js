$(".sign-up").on("click", function() {
    $(".login").addClass("login-off");
    $(".registration").removeClass("reg-off");
})

$(".log").on("click", function () {
  $(".login").removeClass("login-off");
  $(".registration").addClass("reg-off");
});
