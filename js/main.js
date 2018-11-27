document.addEventListener('DOMContentLoaded', () => {
  // This is the bare minimum JavaScript. You can opt to pass no arguments to setup.
  const players = Plyr.setup('.item-video', {
    controls: [
      // 'play-large', // The large play button in the center
      'play', // The large play button in the center

    ],
    iconUrl: 'https://yr.media/statics/imgs/plyr.svg',
    fullscreen: { enabled: false },
    clickToPlay: false
  });

  var carousel = document.querySelector(".main-carousel")
  var flkty = new Flickity( carousel, {
    // options
    cellAlign: 'center',
    contain: true,
    pageDots: true,
    draggable: true,
  });

});
