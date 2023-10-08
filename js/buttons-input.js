const buttonsInput = () => {    

    const data = [
        {
            name: 'dewars',
            img: './swiper-1-img/whisky-1.png',
            type: 'Слабый',
            info: 'Dewars',
        },
        {
            name: 'special',
            img: './swiper-1-img/whisky-2.png',
            type: 'Крепкий',
            info: 'Special',
        },
        {
            name: 'powers',
            img: './swiper-1-img/whisky-3.png',
            type: 'Крепкий',
            info: 'Powers',
        },
        {
            name: 'starward',
            img: './swiper-1-img/whisky-4.png',
            type: 'Крепкий',
            info: 'Starward',
        },
        {
            name: 'daniel',
            img: './swiper-1-img/whisky-5.png',
            type: 'Безалкогольный',
            info: 'Daniel',
        },
    ]
        let selectedCategory = 'Все'
    
    
        const renderCategories = (data) => {
            const row = document.querySelector('.row-buttons-input')
            row.innerHTML = ''
            data.forEach(el => {
                const col = document.createElement('div')
                const box = document.createElement('div')
                const img = document.createElement('img')
                const paragraph = document.createElement('div')
                const info = document.createElement('p')
        
                col.className = 'col-2'
                box.className = 'box__select'
        
                paragraph.className = 'paragraph__select'
                info.textContent = el.info
                img.src = el.img
        
                paragraph.append(info)
                box.append(img, paragraph)
                col.append(box)
                row.append(col)
            })
        }
        renderCategories(data)
        
        const categoriesData = ['Все',...new Set(data.map(el => el.type))]
        
        const filterData = () => {
            const btnHolder = document.querySelector('.button-holder')
            categoriesData.forEach(el => {
                const btn = document.createElement('button')

                btn.textContent = el
                btn.className = 'btn'
        
                btn.addEventListener('click', () => {
                    console.log(1);
                    selectedCategory = el
                    const filteredData = data.filter(item => item.type === el)
                    renderCategories(filteredData.length > 0 ? filteredData : data)
                })
                btnHolder.append(btn)
            })
        }
        filterData()
        
        const activeButton = () => {
            const buttons = document.querySelectorAll('.btn')
            buttons[0].classList.add('active')
            buttons.forEach((el, index) => {
                el.addEventListener('click', () => {
                    buttons.forEach((_, innerIndex) => {
                        if (index === innerIndex) {
                            buttons[index].classList.add('active')
                        } else {
                            buttons[innerIndex].classList.remove('active')
                        }
                    })
                })
            })
        }
        activeButton()
        
        const staticSearch = () => {
            const search = document.querySelector('.search-only-button')
            const searchBtn = document.querySelector('.searchBtn')
            searchBtn.addEventListener('click', () => {
                const filteredData = data.filter(item => item.name.toLowerCase() === search.value.toLowerCase() && (selectedCategory === item.type || selectedCategory === 'Все'))
                renderCategories(filteredData)
            })
        }
    staticSearch()
}
buttonsInput()