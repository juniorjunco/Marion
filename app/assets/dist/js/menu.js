/* =================== HEADER FULL =================== */
jQuery(document).ready(function ($) {
  const header = $(".header-full");
  const menuMbBtn = $("#menu-mobile-btn");
  if (header.length > 0 && $(".home-full").length > 0) {
    function toggleHeaderFull() {
      var scrollTop = $(window).scrollTop();
      if (scrollTop > 100) {
        header.addClass("active");
        menuMbBtn.removeClass("full");
      } else {
        header.removeClass("active");
        menuMbBtn.addClass("full");
      }
    }
    toggleHeaderFull();
    $(window).on(
      "scroll",
      debounce(function () {
        toggleHeaderFull();
      }, 10)
    );
  }
});
