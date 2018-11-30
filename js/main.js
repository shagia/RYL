function startVideoSlider() {

  const players = Plyr.setup('.item-video', {
    controls: [
      // 'play-large', // The large play button in the center
      'play', // The large play button in the center
    ],
    iconUrl: 'https://yr.media/statics/imgs/plyr.svg',
    fullscreen: {
      enabled: false
    },
    // clickToPlay: false
  });

  var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: false,
    centerInsufficientSlides: true,
    slidesPerView: 2,
    breakpoints: {
      700: {
        slidesPerView: 1
      }
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });

}

document.addEventListener('DOMContentLoaded', () => {
  startVideoSlider();
});
