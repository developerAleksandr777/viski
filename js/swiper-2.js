
let swiper = new Swiper('.swiper-two', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop:true,
    spaceBetween: 30,
    grabCursor: true,
    slidesPerView: 3,
    loop:true,
    centeredSlides: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0
      },
        390: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        576: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30
        }, 
        996: {
            slidesPerView: 3,
            spaceBetween: 40
          },
    }
})