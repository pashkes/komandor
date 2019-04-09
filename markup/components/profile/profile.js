const postIndex = document.getElementById('profile-post-index');
const numberDocument = document.getElementById('profile-num-doc');

const initMask = function () {
  const regExpMaskPostalIndex = new IMask(
    postIndex,
    {
      mask: /^[1-6]\d{0,5}$/
    });
  const documentMask = new IMask(
    numberDocument, {
      mask: '00000-0000-0000-0'
    });
};

postIndex && initMask();
