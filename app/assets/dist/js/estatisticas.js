(function () {
  "use strict";
  $(document).scroll(function () {
    animeScroll($(".count"), function () {
      $(".count")
        .not(".done")
        .each(function () {
          $(this).addClass("done");
          $(this)
            .prop("Counter", 0)
            .animate(
              {
                Counter: $(this).text(),
              },
              {
                duration: 3000,
                easing: "swing",
                step: function (now) {
                  $(this).text(Math.ceil(now));
                },
              }
            );
        });
    });
  });
})();
