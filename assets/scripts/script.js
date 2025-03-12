if(window.innerWidth <= 767) {
  $("#services").removeClass(".relative_color")
}

window.onload = function () {
  $(".home-slick").slick({
    arrows: false,
    dots: true,
    appendDots: $(".custome-dots"),
    slideToShow: 1
  })

  window.addEventListener("scroll", fixedHeader);
  fixedHeader()
  function fixedHeader() {
    if(!document.querySelector("header#contact")) {
      if (window.scrollY > 0) {
        document.querySelector("nav.header__navBar").classList.add("fixed_bg");
        if(window.innerWidth <= 768) {
          document.querySelector(".header__hambuger ").classList.add("change_color")
          document.querySelector("nav.header__navBar").classList.remove("relative_color");
        }
      } else {
        document.querySelector("nav.header__navBar").classList.remove("fixed_bg");
        // document.querySelector("nav.header__navBar").classList.add("relative_color");
        if(window.innerWidth <= 768 && !document.querySelector("header#contact")) {
          document.querySelector(".header__hambuger ").classList.remove("change_color")
        }
      }
    }
  }

  var mainHavePaddingTop = document.querySelector("main.p-header")
  if((mainHavePaddingTop && window.innerWidth > 768) || (mainHavePaddingTop && document.querySelector("header#contact"))) {
    mainHavePaddingTop.style.paddingTop = document.querySelector("header.header").offsetHeight + "px"
  }

  $('.category-slide').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    // focusOnSelect: true,
    infinite: false,
    responsive: [
      {
          breakpoint: 768,
          settings: {
              slidesToShow: 3
          }
      },
      {
        breakpoint: 480,
        settings: {
            slidesToShow: 2
        }
    }
  ]
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

  $(".header__hambuger").click(function () {
    $(".header__hambuger").toggleClass("active");
    $(".header__navList").toggleClass("active");
  })

  
};