

const selectOption = () => {

    const data = [
        // x
    {
        name: 'madeira wood',
        img:'./swiper-2-img/Kemlya_Madeira.png',
        logo:'./swiper-2-img/madeira.png',
        info:'Ограниченный релиз бочковой крепости, с трехлетним финишем в бочках из под крепленого вина Madeirа',
        type: 'Слабый',
        price: 5000,
    },
    {
        name: 'russian oak',
        img:'./swiper-2-img/Kemlya_RussianOak.png',
        logo:'./swiper-2-img/russia.png',
        info:'Однобочковой релиз с настоящим русским характером, выдержанный в новых бочках из южного русского дуба',
        type: 'Крепкий',
        price: 3000,

    },
    {
        name: 'bog oak',
        img:'./swiper-2-img/Kemlya_BogOak.png',
        logo:'./swiper-2-img/bog.png',
        info:'Релиз, не имеющий мировых аналогов, с финишной выдержкой в уникальных бочках из мореного дуба, возрастом более 2000 лет',
        type: 'Крепкий',
        price: 9000,

    },
    {
        name: 'port wood',
        img:'./swiper-2-img/Kemlya_PortWood.png',
        logo:'./swiper-2-img/port.png',
        info:'Уникальный релиз, финишированный в бочках из Португалии, которые хранили крепленое вино Porto Tawny',
        type: 'Крепкий',
        price: 11000,

    },
    {
        name: 'sherry wood',
        img:'./swiper-2-img/Kemlya_SherryWood.png',
        logo:'./swiper-2-img/sherry.png',
        info:'Яркий релиз с довыдержкой в испанских сигарных бочках, ранее хранивших крепленый херес Oloroso',
        type: 'Безалкогольный',
        price: 1000,
    },
]

    let selectedCategory = 'Все'


    const renderCategories = (data) => {
        const row = document.querySelector('.row')
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
            logo.className = 'logo-in-select'
    
            img.className = 'image-in-select'
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
        const select = document.querySelector('select')
        categoriesData.forEach(el => {
            const option = document.createElement('option')
            option.textContent = el
            option.value.textContent = el
    
            select.addEventListener('change', () => {
                if (select.value === el) {
                    selectedCategory = el
                    const filteredData = data.filter(item => {
                        return item.type === el
                    })
                    renderCategories(filteredData.length > 0 ? filteredData : data)            
                }          
            })
            select.append(option)
    })
    }
    filterData()
    
    const dynamicSearch = () => {
        const search = document.querySelector('.search')
        search.addEventListener('input', () => {
            const filteredData = data.filter(item => {
                return item.name.toLowerCase().includes(search.value.toLowerCase()) && (selectedCategory === item.type || selectedCategory === 'Все')
            })
            renderCategories(filteredData)
        })
    }
    dynamicSearch()
}
selectOption()


