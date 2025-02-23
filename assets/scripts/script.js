$(".home-slick").slick({
    arrows: false,
    dots: true,
    appendDots: $(".custome-dots"),
    slideToShow: 1
})

window.addEventListener("scroll", fixedHeader);

function fixedHeader() {
  if(window.scrollY > 0) {
    document.querySelector("nav.header__navBar").classList.add("fixed_bg");
  }else {
    document.querySelector("nav.header__navBar").classList.remove("fixed_bg");
  }
}