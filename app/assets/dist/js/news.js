(function () {
  'use strict';

  function isMobileX(screenSize) {
    return $(window).width() < screenSize;
  }

  if (!isMobileX(760) && $('#lateral').length > 0) {
    const topSpacing = $('.header').outerHeight() + 20;
    const bottomSpacing = $('.footer').outerHeight() + 20;
    $('#lateral').sticky({
      topSpacing: topSpacing,
      bottomSpacing: bottomSpacing,
    });
  }
})();

(function () {
  'use strict';
  $('.palestras-fotos ul').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    fade: true,
    adaptiveHeight: true,
    cssEase: 'linear',
  });
})();
