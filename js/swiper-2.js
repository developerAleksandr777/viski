const secondSwiper = () => {
    const ourWhisky = [
        {
            img: '/swiper-2-img/Kemlya_Madeira.png'
        },
        {
            img: '../swiper-2-img/Kemlya_BogOak.png'
        },
        {
            img: '../swiper-2-img/Kemlya_RussianOak.png'
        },
        {
            img: '../swiper-2-img/Kemlya_PortWood.png'
        },
        {
            img: '../swiper-2-img/Kemlya_SherryWood.png'
        },
    ]
    let swiper = new Swiper('.swiper-two', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        spaceBetween: 30,
        grabCursor: true,
        slidesPerView: 2,
        loop: true,
    })
}
secondSwiper()