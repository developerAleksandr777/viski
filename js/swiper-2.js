// const secondSwiper = () => {
    

// const swiperWrapper = document.querySelector('.swiper-wrapper-2')

//     let swiper = new Swiper('.swiper-two', {
//             navigation: {
//                 nextEl: '.swiper-button-next',
//                 prevEl: '.swiper-button-prev',
//             },
//             pagination: {
//                 el: '.swiper-pagination',
//                 clickable: true
//             },
//             spaceBetween: 30,
//             grabCursor: true,
//             // slidesPerView: 3,
//             // slidesPerGroup: 4
//         })

//     ourWhisky.forEach(el => {
//         const swiperSlide = document.createElement('div')
//         const img = document.createElement('img')

//         swiperSlide.className = 'swiper-slide-2'

//         img.src = el.img

//         swiperSlide.append(img)
//         swiperWrapper.append(swiperSlide)
//     })
// }
// secondSwiper()

// const ourWhisky = [
//     {
//         img: './swiper-2-img/Kemlya_Madeira.png'
//     },
//     {
//         img: './swiper-2-img/Kemlya_BogOak.png'
//     },
//     {
//         img: './swiper-2-img/Kemlya_RussianOak.png'
//     },
//     {
//         img: './swiper-2-img/Kemlya_PortWood.png'
//     },
//     {
//         img: './swiper-2-img/Kemlya_SherryWood.png'
//     },
// ]


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

// const swiperWrapper = document.querySelector('.swiperWrap-2')


// const secondSwiper = () => {
    
//     ourWhisky.forEach(el => {
//         const swiperSlide = document.createElement('div')
//         const img = document.createElement('img')

//         swiperSlide.className = 'swiper-slide-2'

//         img.src = el.img

//         swiperSlide.append(img)
//         swiperWrapper.append(swiperSlide)
//     })

    
// }
// secondSwiper()