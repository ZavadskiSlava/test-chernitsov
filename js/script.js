$(document).ready(function () {
  $(".slider__items").slick({
    infinite: true,
    slidesToShow: 3,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
    variableWidth: true,
  });

  const menu = document.querySelector(".header__nav"),
    menuItem = document.querySelectorAll(".header__nav_item"),
    hamburger = document.querySelector(".hamburger");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger_active");
    menu.classList.toggle("header__nav_active");
  });

  menuItem.forEach((item) => {
    item.addEventListener("click", () => {
      hamburger.classList.toggle("hamburger_active");
      menu.classList.toggle("header__nav_active");
    });
  });
});
