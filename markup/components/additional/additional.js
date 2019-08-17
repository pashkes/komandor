(function () {
  const sliderLicences = $('.js-licences-slider');
  const arrowNextSlider = $('.js-next-slider-licence');
  const LARGE_SIZE = 539;
  const initLicenceseSlider = function () {
    sliderLicences.slick({
      arrows: true,
      mobileFirst: true,
      variableWidth: true,
      nextArrow: arrowNextSlider,
      responsive: [
        {
          breakpoint: LARGE_SIZE,
          settings: {
            variableWidth: false,
            slidesToShow: 2
          }
        },
        {
          breakpoint: 767,
          settings: {
            variableWidth: true
          }
        },
        {
          breakpoint: 959,
          settings: {
            slidesToShow: 2,
            variableWidth: false
          }
        }
      ]
    });
  };
  sliderLicences.length && initLicenceseSlider();
  lightbox.option({
    'resizeDuration': 200
  });
})();
