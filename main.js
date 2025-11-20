$(function () {
  $(".mBtn").on("click", function () {
    $("nav").addClass("navActive");
  });
  $(".closeBtn").on("click", function () {
    $("nav").removeClass("navActive");
  });
  $(".navWrap > .navLink > a")
    .eq(0)
    .on("click", function () {
      $(".subMenuNavi").addClass("navActive");
    });
  $(".subMenuBtn").on("click", function () {
    $(".subMenuNavi").removeClass("navActive");
  });
});

const productSwiper = new Swiper(".productSwiper", {
  loop: false,
  speed: 600,
  slidesPerView: "auto",
  slidesPerGroup: 1,
  spaceBetween: 16,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

function scrollTrigger(selector, className, startPonit = 0.8) {
  const $target = $(selector);
  if (!$target.length) return;
  function checkSite() {
    const winTop = $(window).scrollTop();
    const winH = $(window).height();
    $target.each(function () {
      const $this = $(this);
      const thisTop = $this.offset().top;
      if (winTop + winH * startPonit > thisTop) {
        $this.addClass(className);
      }
    });
  }
  $(window).on("scroll resize", checkSite);
  checkSite();
}
$(function () {
  scrollTrigger(".showcaseItem", "active", (startPonit = 0.75));
});
