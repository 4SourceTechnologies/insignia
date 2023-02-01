
// count up function
var runAlready;
var counting;

function startCounter(a) {
  runAlready = true;
  counting = true;
  $(".counter").each(function () {
    var $this = $(this);
    $this.text(a);
    countTo = $this.attr("data-count");
    $({
      countNum: $this.text(),
    }).animate(
      {
        countNum: countTo,
      },
      {
        duration: 8000,
        easing: "swing",
        step: function () {
          $this.text(Math.floor(this.countNum));
        },
        complete: function () {
          $this.text(this.countNum);
          counting = false;
        },
      }
    );
  });
}

$(window).scroll(function () {
  var oTop = $(".counter").offset().top;
  var a = 0;
  if (
    (!runAlready && $(window).scrollTop() > oTop) ||
    (!counting && $(window).scrollTop() < oTop)
  ) {
    startCounter(a);
  }
});

// Count Up function ends here

// mobile navbar
let humburger = document.querySelector(".navbar-toggler");
let times = document.querySelector(".times");
let mobileNav = document.querySelector(".mobileNav");

humburger.addEventListener("click", function () {
  mobileNav.classList.toggle("open");
});
humburger.addEventListener("blur", function () {
  mobileNav.classList.remove("open");
});
// Mobile nav number function ends here

// Navbar Two postion:fixed upon Scroll 
// $(document).ready(function () {
//   $(window).scroll(function () {
//     var scroll = $(window).scrollTop();
//     if (scroll > 5) {
//       $(".navbar").css("position", "fixed");
//       $(".headerTopWrapper").css("z-index", "1030");
//       $(".navbar").css("top", "0");
//     } else if(scrollY < 5){
//       $(".navbar").css("position", "static")
//       $(".headerTopWrapper").css("position", "relative");
//     }
//   });
// });

window.addEventListener("scroll", function(){
  var headerTop = document.querySelector(".headerTop");
  var nav = this.document.querySelector(".strickyHeader");
  headerTop.classList.toggle("htAnimate", window.scrollY > 5);
  nav.classList.toggle("stricky-fixed", window.scrollY > 5)
})

$(document).ready(function () {
  $(".ianimator").waypoint(
    function () {
      $(".ianimator").addClass("animated fadeIn");
    },
    {
      offset: "90%",
    }
  ),
    $(".animatortwo").waypoint(
      function () {
        $(".animatortwo").addClass("animated fadeIn");
      },
      {
        offset: "90%",
      }
    ),
    $(".animatorthree").waypoint(
      function () {
        $(".animatorthree").addClass("animated fadeIn");
      },
      {
        offset: "90%",
      }
    ),
    $(".animatorfour").waypoint(
      function () {
        $(".animatorfour").addClass("animated fadeIn");
      },
      {
        offset: "90%",
      }
    ),
    $(".animatorfive").waypoint(
      function () {
        $(".animatorfive").addClass("animated fadeIn");
      },
      {
        offset: "60%",
      }
    ),
    $(".animatorsix").waypoint(
      function () {
        $(".animatorsix").addClass("animated fadeIn");
      },
      {
        offset: "90%",
      }
    );
});