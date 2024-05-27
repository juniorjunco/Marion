/* =================== SLIDE HOME =================== */
jQuery(document).ready(function ($) {
  $('.slide-home').slick({
    //lazyLoad: 'ondemand',
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    //adaptiveHeight: true,
    speed: 2000,
    pauseOnFocus: false,
    pauseOnHover: false,
  });
  /* .on('beforeChange', function () {
      $('.slide-content').hide();
    })
    .on('afterChange', function () {
      $('.slide-content').show();
    }); */
});
