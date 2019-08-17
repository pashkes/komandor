(function () {
  var videos = document.querySelectorAll('.js-video');

  function findVideos() {
    for (var i = 0; i < videos.length; i++) {
      setupVideo(videos[i]);
    }
  }

  function setupVideo(video) {
    var link = video.querySelector('.video__link');
    var media = video.querySelector('.video__media');
    var button = video.querySelector('.video__button');
    var id = parseMediaURL(link);

    video.addEventListener('click', function () {
      var iframe = createIframe(id);

      link.remove();
      button.remove();
      video.appendChild(iframe);
      video.classList.add('playing');
    });

    link.removeAttribute('href');
    video.classList.add('video--enabled');
  }

  function parseMediaURL(media) {
    var url = media.href;
    var videoId = url.split(/v\/|v=|youtu\.be\//)[1].split(/[?&]/)[0];

    return videoId;
  }

  function createIframe(id) {
    var iframe = document.createElement('iframe');

    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('allow', 'autoplay');
    iframe.setAttribute('src', generateURL(id));
    iframe.classList.add('video__media');

    return iframe;
  }

  function generateURL(id) {
    var query = '?rel=0&showinfo=0&autoplay=1';

    return 'https://www.youtube.com/embed/' + id + query;
  }

  videos.length && findVideos();


  const videoModal = document.querySelector('.js-modal-video');

})();

