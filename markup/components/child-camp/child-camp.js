
(function () {
  const DESKTOP_SCREEN = 1245;
  const langSlider = $('.js-slider-camp');
  const nextSlider = $('.js-next-slider-camp');

  function enableSliderOnlyMobile(slider) {
    slider.each(function (index) {
      if ($(window).width() >= DESKTOP_SCREEN) {
        if ($(this).hasClass('slick-initialized')) {
          $(this).slick('unslick');
        }
        return false;
      }
      if (!$(this).hasClass('slick-initialized')) {
        return $(this).slick(
          {
            arrows: true,
             mobileFirst: true,
            variableWidth: true,
            nextArrow: nextSlider[index]
          }
        );
      }
    });
  }

  $(window).on('load resize orientationchange', function () {
    langSlider.length && enableSliderOnlyMobile(langSlider);
  });

})();
