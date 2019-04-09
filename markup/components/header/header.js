const toggleTextInShowMore = function () {
  const TEXT_OPENED_STATE = 'Скрыть';
  const showMoreBtn = document.querySelectorAll('.show-more .js-expandmore-button span');
  const arrayTextShowMore = Array.from(showMoreBtn);
  const textShowMore = arrayTextShowMore.map(function (item) {
    return item.textContent;
  });

  arrayTextShowMore.forEach(function (item) {
    item.addEventListener('click', function (evt) {
      const target = evt.target;
      const currentText = target.textContent;
      const thisText = textShowMore[arrayTextShowMore.indexOf(target)];
      target.textContent = currentText !== TEXT_OPENED_STATE ? TEXT_OPENED_STATE : thisText;
    });
  });
};

window.onload = function () {
  toggleTextInShowMore();
};

const element = document.getElementById('field-tel');
const initTelMask = function () {
  const maskOptions = {
    mask: '+{7}(000)000-00-00'
  };
  const mask = new IMask(element, maskOptions);
};
element && initTelMask();
(function () {
  const btnMenu = document.querySelector('.js-show-menu');
  const body = document.body;
  const closeBtn = document.querySelector('.js-close-menu');

  const onClickCloseMobileMenu = function () {
    btnMenu.addEventListener('click', function () {
      body.classList.add('menu-is-opened');
      this.setAttribute('aria-expanded', 'true');
    });
  };
  const onClickMobileMenu = function () {
    closeBtn.addEventListener('click', function () {
      body.classList.remove('menu-is-opened');
      btnMenu.setAttribute('aria-expanded', 'false');
    });
  };
  btnMenu && onClickMobileMenu();
  closeBtn && onClickCloseMobileMenu();
})();

(function () {
  const header = document.querySelector(`.header`);

  const toggleClassOnScrollHandler = function () {
    if (window.scrollY > 1) {
      header.classList.add('header--pass-through');
    } else {
      header.classList.remove('header--pass-through');
    }
  };
  const toggleClassOnScroll = function () {
    document.addEventListener('scroll', toggleClassOnScrollHandler);
    window.addEventListener('load', toggleClassOnScrollHandler);
    window.addEventListener('resize', toggleClassOnScrollHandler);
  };
  header && toggleClassOnScroll();
})();
