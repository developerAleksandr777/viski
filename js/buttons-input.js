const buttonsInput = () => {    

    const data = [
    {
        name: 'madeira wood',
        img:'../swiper-2-img/Kemlya_Madeira.png',
        logo:'../swiper-2-img/madeira.png',
        info:'Ограниченный релиз бочковой крепости, с трехлетним финишем в бочках из под крепленого вина Madeirа',
        type: 'Слабый'
    },
    {
        name: 'russian oak',
        img:'../swiper-2-img/Kemlya_RussianOak.png',
        logo:'../swiper-2-img/russia.png',
        info:'Однобочковой релиз с настоящим русским характером, выдержанный в новых бочках из южного русского дуба',
        type: 'Крепкий'
    },
    {
        name: 'bog oak',
        img:'../swiper-2-img/Kemlya_BogOak.png',
        logo:'../swiper-2-img/bog.png',
        info:'Релиз, не имеющий мировых аналогов, с финишной выдержкой в уникальных бочках из мореного дуба, возрастом более 2000 лет',
        type: 'Крепкий'
    },
    {
        name: 'port wood',
        img:'../swiper-2-img/Kemlya_PortWood.png',
        logo:'../swiper-2-img/port.png',
        info:'Уникальный релиз, финишированный в бочках из Португалии, которые хранили крепленое вино Porto Tawny',
        type: 'Крепкий'
    },
    {
        name: 'sherry wood',
        img:'../swiper-2-img/Kemlya_SherryWood.png',
        logo:'../swiper-2-img/sherry.png',
        info:'Яркий релиз с довыдержкой в испанских сигарных бочках, ранее хранивших крепленый херес Oloroso',
        type: 'Безалкогольный'
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
                const logo = document.createElement('img')
                const paragraph = document.createElement('div')
                const info = document.createElement('p')
        
                col.className = 'col-2'
                box.className = 'box__select'
        
                paragraph.className = 'paragraph__select'
                info.textContent = el.info
                img.src = el.img
                logo.src = el.logo
        
                paragraph.append(info)
                box.append(img, logo, paragraph)
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