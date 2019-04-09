(function () {
  const sliderMap = $('.js-map-achievement-slider');
  const nextSlider = $('.js-next-slider-map');
  const initChangeSlider = function () {
    sliderMap.slick({
      arrows: true,
      mobileFirst: true,
      nextArrow: nextSlider
    });
  };
  sliderMap.length && initChangeSlider();
})();
