(function () {
  var nav = document.querySelector(".nav"),
    toggle = document.querySelector(".page-header__toggle");

  nav.classList.add("js-menu");

  toggle.addEventListener("click", function(event) {
    event.preventDefault();
    nav.classList.toggle("js-menu--open");
  })
}) ();
