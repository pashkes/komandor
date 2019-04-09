(function () {
  const sliderChange = $('.js-slider-change');
  const nextSlider = $('.js-next-slider-change');
  const initChangeSlider = function () {
    sliderChange.slick({
      arrows: true,
      mobileFirst: true,
      variableWidth: true,
      nextArrow: nextSlider
    });
  };
  sliderChange.length && initChangeSlider();
})();

