
let swiper = new Swiper('.swiper-two', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    loop:true,
    spaceBetween: 30,
    grabCursor: true,
    slidesPerView: 2,
    // slidesPerGroup: 4
})