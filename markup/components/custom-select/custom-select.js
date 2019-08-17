(function () {
  const selectHashTags = $('.js-custom-multi-select');
  const tagLists = document.querySelector('.tags');
  const selectsMulti = Array.from(document.querySelectorAll('.js-custom-multi-select'));
  const initCustomMultiSelect = function () {
    selectHashTags.SumoSelect({
      placeholder: 'Выберите из списка',
      captionFormat: 'Выберите из списка',
      csvDispCount: 1,
      captionFormatAllSelected: 'Выберите из списка',
      nativeOnDevice: ['Android', 'BlackBerry', 'iPhone', 'iPad', 'iPod', 'Opera Mini', 'IEMobile', 'Silk']
    });
  };

  const addTagsOnChange = function () {
    selectHashTags.on('change', function (event) {
      const arrSelected = [];
      const tagList = (event.target.closest('.custom-select')).nextElementSibling;
      $(event.target).find('option:selected').each(function () {
        arrSelected.push($(this).text());
      });
      tagList.innerHTML = '';
      const tagTemplate = arrSelected.map(function (item) {
          return '<li class="tags__item">' + item + '<button type="button" class="tags__remove" title="удалить тег"></button></li>';
        }
      ).join('');

      tagList.insertAdjacentHTML('beforeend', tagTemplate);
      removeTags();
    });
  };

  const removeTags = function () {
    $('.tags__remove').on('click', function (evt) {
      const selectText = $(evt.target).parent().text().trim();
      const targetElement = ((evt.target.closest('ul')).previousElementSibling).querySelector('select');
      const targetIndex = (selectsMulti.indexOf(targetElement));
      selectHashTags.find('option:selected').each(function () {
        if (selectText === $(this).text().trim()) {
          $(this).prop('selected', false);
        }
      });
      selectHashTags[targetIndex].sumo.unSelectItem($(evt.target).parent().text());

      $(evt.target).parent().remove();
      selectHashTags[targetIndex].sumo.reload();
    });
  };

  selectHashTags.length && initCustomMultiSelect();
  tagLists && addTagsOnChange();
  tagLists && removeTags();
})();

(function () {
  const customSelect = $('.js-custom-select');
  const initCustomSelect = function () {
    customSelect.SumoSelect({
      nativeOnDevice: ['Android', 'BlackBerry', 'iPhone', 'iPad', 'iPod', 'Opera Mini', 'IEMobile', 'Silk']
    });
  };
  customSelect.length && initCustomSelect();
})();
