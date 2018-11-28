var videoCount = 0;

function flickityStart(){

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

    var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,

    pagination: {
      el: '.swiper-pagination',
    },

    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

}

document.addEventListener('DOMContentLoaded', () => {
  // This is the bare minimum JavaScript. You can opt to pass no arguments to setup.
  const videoList = document.querySelectorAll('.item-video');
  videoList.forEach(function(el) {
    el.addEventListener('loadeddata', function() {

    console.log(videoCount++)
    if (videoCount >= videoList.length ) {
      flickityStart();
    }

  console.log(videoList + " loaded!");

  // if (videoCount == )
  }, false);
})});


