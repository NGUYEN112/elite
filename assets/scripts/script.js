if(window.innerWidth <= 767) {
  $("#services").removeClass(".relative_color")
}

window.onload = function () {
  var path = window.location.pathname.split("/").pop(); 
  if(path === "") {    
    $("#index").addClass("active")
  }else {
    $("#"+path.slice(0,-5)).addClass("active")
    console.log($("#"+path.slice(0,-5)));
    
  }
  
  

  var homeSlider = $(".home-slick")
  homeSlider.slick({
    arrows: false,
    dots: true,
    appendDots: $(".custome-dots"),
    slideToShow: 1, 
    autoplay: true,
    autoplaySpeed: 3000
  })

  homeSlider.on('beforeChange', function(event, slick, currentSlide){
    var section01 = $("#section01")
    switch (currentSlide) {
      case 1:
        section01.css({
          "background-image": "url(../assets/images/img_slide_bnr_03.jpg)",
        })
        break;
      case 2: 
        section01.css({
          "background-image": "url(../assets/images/img_slide_bnr_01.jpg)"
        })
      break;
      default:
        section01.css({
          "background-image": "url(../assets/images/img_slide_bnr_02.jpg)"
        })
        break;
    }
  });

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

  var categorySlide = $('.category-slide')
  categorySlide.slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    focusOnSelect: false,
    infinite: false,
    responsive: [
      {
          breakpoint: 768,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 3
          }
      },
      {
        breakpoint: 480,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    }
  ]
  });
  
  $(".slick-arrow").click(function (event) {
    openInfoCategory($(".category-slide .slick-current .openInfo").attr("id"))
  })
  $(".openInfo").click(function (event) {
    openInfoCategory($(this).attr('id'))
  })

  function openInfoCategory(id){    
      $(".openInfo").removeClass("active");
      $(".openInfo#"+id).addClass("active");
      $(".slide-info").removeClass("active")
      $(".slide-info#info"+id).addClass("active")
  }

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