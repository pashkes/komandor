(function () {
  const slider = $('.js-staff-slider');

  const initStaffSlider = function () {
    const prevArrow = $('.js-staff-prev-arrow ');
    const nextArrow = $('.js-staff-next-arrow');
    slider.slick({
      arrows: true,
      prevArrow: prevArrow,
      nextArrow: nextArrow,
      mobileFirst: true,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 575,
          settings: {
            variableWidth: false,
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 1245,
          settings: {
            variableWidth: false,
            slidesToShow: 4,
          }
        }
      ]
    });
  };
  slider.length && initStaffSlider();
})();
