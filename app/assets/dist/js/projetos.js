(function () {
  "use strict";

  // Mosaico
  /* $(".projetos-lista").imagesLoaded(function () {
    $(".projetos-lista").masonry({
      itemSelector: ".projeto",
      columnWidth: ".projeto",
      gutter: 40,
      percentPosition: true,
      transitionDuration: 0,
    });
    AOS.refresh();
  }); */

  // Carrosel fotos
  $(".projeto-carrosel").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    arrows: true,
    fade: true,
    adaptiveHeight: true,
  });

  // Carrosel thumbs
  $(".projeto-carrosel-thumbs").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true,
    focusOnSelect: true,
    arrows: false,
    asNavFor: ".projeto-carrosel",
    //centerMode: true,
    responsive: [
      {
        breakpoint: 1119,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });
})();
