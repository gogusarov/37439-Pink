var menuIcon = document.querySelector(".main-nav__toggle"),
    iconHolder = menuIcon.querySelector("i"),
    navList = document.querySelector(".main-nav__list"),
    nav = document.querySelector(".nav");


menuIcon.addEventListener("click", function(event) {
  event.preventDefault();
      
  if (iconHolder.classList.contains("icon-menu-burger")) {
    iconHolder.classList.remove("icon-menu-burger");
    iconHolder.classList.add("icon-menu-cross");
    navList.classList.add("main-nav__list--visible");
    nav.classList.add("nav--open-menu");
    
  } else if (iconHolder.classList.contains("icon-menu-cross")) {
    iconHolder.classList.remove("icon-menu-cross");
    iconHolder.classList.add("icon-menu-burger");
    navList.classList.remove("main-nav__list--visible");
    nav.classList.remove("nav--open-menu");
  } 
})
