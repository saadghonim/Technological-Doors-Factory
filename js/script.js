$(window).on("load", function () {
  $(".preload").fadeOut();
  $("body").removeClass("over_");
});
// ~~~~~~~~~~~~~~~~~varibles~~~~~~~~~~~~~~~~~~~~~~
const nav_ = document.querySelector("nav");
const clsoe_menu = document.querySelector(".close_");
const btn_bars = document.querySelector(".btn_bars");
const moboverlay = document.querySelector(".moboverlay");
const body_ = document.querySelector("body");

// ~~~~~~~~~~~~~~~~~~~~~~~~~~mob-menu~~~~~~~~~
btn_bars.addEventListener("click", function () {
  nav_.classList.add("open_nav");
  moboverlay.style.display = "block";
  body_.classList.add("over_");
});
clsoe_menu.addEventListener("click", function () {
  nav_.classList.remove("open_nav");
  moboverlay.style.display = "none";
  body_.classList.remove("over_");
});
moboverlay.addEventListener("click", function () {
  nav_.classList.remove("open_nav");
  moboverlay.style.display = "none";
  body_.classList.remove("over_");
});
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

$(document).ready(function () {
  if ($(window).width() <= 776) {
    // sub menu
    $(".hover_submenu > a").click(function (e) {
      e.preventDefault();
      $(this).parent().find(".submenu").slideToggle("500");
    });
  }
  // ~~~~~~~~~~~~~~~
  $(".news .owl-carousel").owlCarousel({
    loop: true,
    nav: true,
    // autoplay: true,
    margin: 30,
    rtl: $("html").attr("dir") == "rtl" ? true : false,
    navText: [
      "<i class='la la-angle-right'></i>",
      "<i class='la la-angle-left'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  });
  /*~~~~~~~~~~~~~~~~~~end clients~~~~~~~~~~~~~~~~~~~~ */

  // ~~~~~~~~~~~~back_top~~~~~~~~~~~~~~~~~~~~~~
  var btn = $(".back_top");

  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      btn.addClass("show");
    } else {
      btn.removeClass("show");
    }
  });
  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "500");
  });
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~end back_top~~~~~~~~~~~~

  if ($(".js-example-disabled-results").length) {
    var $disabledResults = $(".branches_p .js-example-disabled-results");
    $disabledResults.select2();
  }
});
