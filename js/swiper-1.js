const firstSwiper = () => {
    const dataWhisky = [
        {
            img: './swiper-1-img/whisky-1.png'
        },
        {
            img: './swiper-1-img/whisky-2.png'
        },
        {
            img: './swiper-1-img/whisky-3.png'
        },
        {
            img: './swiper-1-img/whisky-4.png'
        },
        {
            img: './swiper-1-img/whisky-5.png'
        },
    ]

    const swiperWrapper = document.querySelector('.swiper-wrapper')

    let swiper = new Swiper('.swiper-one', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            spaceBetween: 30,
            grabCursor: true,
            breakpoints: {
                390: {
                  slidesPerView: 1,
                  spaceBetween: 20
                },
                576: {
                  slidesPerView: 1,
                  spaceBetween: 30
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 40
                }, 
                996: {
                    slidesPerView: 1,
                    spaceBetween: 50
                  },
            }
        })

    dataWhisky.forEach(el => {
        const swiperSlide = document.createElement('div')
        const img = document.createElement('img')

        swiperSlide.className = 'swiper-slide'

        img.src = el.img

        swiperSlide.append(img)
        swiperWrapper.append(swiperSlide)
    })
}
firstSwiper()