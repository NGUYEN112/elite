

window.onload = function () {
  $(".home-slick").slick({
    arrows: false,
    dots: true,
    appendDots: $(".custome-dots"),
    slideToShow: 1
  })

  window.addEventListener("scroll", fixedHeader);

  function fixedHeader() {
    if (window.scrollY > 0) {
      document.querySelector("nav.header__navBar").classList.add("fixed_bg");
    } else {
      document.querySelector("nav.header__navBar").classList.remove("fixed_bg");
    }
  }

  var mainHavePaddingTop = document.querySelector("main.p-header")
  mainHavePaddingTop ? mainHavePaddingTop.style.paddingTop = document.querySelector("header.header").offsetHeight + "px" : false

  $('.category-slide').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    // focusOnSelect: true,
    infinite: false
  });

  $(".openInfo").click(function () {
    $(".openInfo").removeClass("active");
    $(this).addClass("active");
    let infoId = $(this).attr("id");
    $(".slide-info").removeClass("active")
    $(".slide-info#info"+infoId).addClass("active")
  })

  $(".closeSlideInfo").click(function () {
    let parentId = $(this).parent().attr('id');
    $(".slide-info#"+parentId).removeClass("active")
    $(".openInfo").removeClass("active");
  })

  setSlickSlideHeight();

  function setSlickSlideHeight() {
    var maxHeight = 0;
    $(".slick-slide").each(function () {
      var thisHeight = $(this).outerHeight();
      if (thisHeight > maxHeight) {
        maxHeight = thisHeight;
      }
    });
    $(".slick-slide button").css("height", maxHeight + "px");
  }

  $(".c-tabs_nav_trigger").click(function () {
    $(".c-tabs_nav_trigger").removeClass("is-checked");
    $(this).addClass("is-checked");
    let tabId = $(this).attr("aria-controls");
    $(".c-tabs_panel").removeClass("is-checked");
    $(".c-tabs_panel#" + tabId).addClass("is-checked");
  })
};