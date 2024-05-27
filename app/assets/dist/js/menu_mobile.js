(function () {
  "use strict";

  // Variáveis
  const $btnMenu = $("#menu-mobile-btn");
  const $menuMobile = $("#menu-mobile");
  const $menuMobileOverlay = $(".menu-mobile-wrapper");
  const $menuMobileSubItem = $("#menu-mobile .has-sub");
  const $menuMobileGoBack = $("#menu-mobile .go-back");
  const $body = $("body");
  let active = false;

  if ($(".menu-mobile-btn-wrap").length > 0) {
    $(".menu-mobile-btn").css(
      "left",
      $(".menu-mobile-btn-wrap").offset().left - 35
    );
  }

  // Eventos
  $btnMenu.on("click", toggleMenuMobile);
  $menuMobileOverlay.on("click", function (ev) {
    if (ev.target == this) {
      hideMenuMobile();
    }
  });

  // Exibe ou oculta o menu mobile
  function toggleMenuMobile() {
    if ($menuMobile.hasClass("active")) {
      hideMenuMobile();
    } else {
      showMenuMobile();
    }
  }

  // Exibe o menu mobile
  function showMenuMobile() {
    active = true;
    $body.addClass("scroll-disabled");
    $btnMenu.addClass("active");
    $menuMobile.addClass("active");
    $menuMobile.find("ul").scrollTop(0);
  }

  // Oculta o menu mobile
  function hideMenuMobile() {
    active = false;
    $body.removeClass("scroll-disabled");
    $btnMenu.removeClass("active");
    $menuMobile.removeClass("active");
    $menuMobile.find("ul").not(".menu-mobile-nav").addClass("is-hidden");
    $menuMobile.find("ul").removeClass("move-left");
    $menuMobile.find("ul").scrollTop(0);
  }

  // Exibe o submenu
  $menuMobileSubItem.children("a").on("click", function (ev) {
    ev.preventDefault();
    $(this).parent().parent().addClass("move-left");
    $(this).parent().children("ul").removeClass("is-hidden");
    $menuMobile.find("ul").scrollTop(0);
  });

  // Oculta o submenu
  $menuMobileGoBack.children("a").on("click", function (ev) {
    ev.preventDefault();
    $(this).parent().parent().parent().parent().removeClass("move-left");
    $(this).parent().parent().addClass("is-hidden");
    $menuMobile.find("ul").scrollTop(0);
  });
})();
