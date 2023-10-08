const dataImgFavorite = [
    {
        img: './favorite-img/1.png',
    },
    {
        img: './favorite-img/2.png',
    },
    {
        img: './favorite-img/3.png',
    },
    {
        img: './favorite-img/4.png',
    },
    {
        img: './favorite-img/5.png',
    },
    // ,
    {
        img: './favorite-img/6.png',
    },
    {
        img: './favorite-img/7.png',
    },
    {
        img: './favorite-img/8.png',
    },
    {
        img: './favorite-img/9.png',
    },
    {
        img: './favorite-img/10.png',
    },
]

const favoriteImage = () => {

    const bigBoxImg = document.querySelector('.bigBoxImg-favorite')
    const bigImg = document.querySelector('.bigImg')
    bigImg.src = dataImgFavorite[0].img
    const row = document.createElement('div')
    row.className = 'row'
    dataImgFavorite.forEach(el => {
        const box = document.createElement('div')
        const img = document.createElement('img')


        const col = document.createElement('div')
        col.className = 'col-4'

        img.className = 'img-favorite'
        box.className = 'box-favorite'

        img.src = el.img
        

        img.addEventListener('click', () => {
            bigImg.src = img.src
        })

        box.append(img)
        col.append(box)
        row.append(col)
        bigBoxImg.append(row)
    })
}
favoriteImage()

const activeImg = () => {
    const imgs = document.querySelectorAll('.img-favorite')
    imgs[0].classList.add('activeImg')
    imgs.forEach((el,index) => {
        el.addEventListener('click', () => {
            imgs.forEach((_,innerIndex) => {
                if (index === innerIndex) {
                    imgs[index].classList.add('activeImg')
                } else {
                    imgs[innerIndex].classList.remove('activeImg')
                }
            })
        })
    })
}
activeImg()