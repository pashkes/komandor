(function () {
  const uploadForm = document.querySelector('.documents');
  const removeDocument = Array.from(document.querySelectorAll('.js-remove-document'));

  const onChangeUploadPhoto = function () {
    uploadForm.addEventListener('change', function (evt) {
      const container = evt.target.closest('.documents__col');
      const preview = container.querySelector('img'); //selects the query named img
      const file = container.querySelector('input[type=file]').files[0]; //sames as here
      const reader = new FileReader();

      reader.onloadend = function () {
        preview.src = reader.result;
      };

      if (file) {
        reader.readAsDataURL(file); //reads the data as a URL
        container.classList.add('is-uploaded');
      } else {
        preview.src = '';
      }
    });
  };

  const onClickRemovePhoto = function () {
    removeDocument.forEach(function (item) {
      item.addEventListener('click', function () {
        const target = this.closest('.documents__col');
        target.classList.remove('is-uploaded');
        (target.querySelector('img')).src = '';
        (target.querySelector('input')).value = '';
      });
    });
  };

  uploadForm && onChangeUploadPhoto();
  uploadForm && onClickRemovePhoto();

  // scroll to the id element
  $('.js-scrollTo').click(function () {
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 500);
    return false;
  });

})();
