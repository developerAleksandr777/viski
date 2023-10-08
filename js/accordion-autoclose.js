const accordionAutoclose = () => {
    data = [
        {
            title: 'Что такое виски?',
            info: 'Ви́ски — крепкий ароматный алкогольный напиток, получаемый из различных видов зерна с использованием процессов соложения, брожения, перегонки и длительного выдерживания в дубовых бочках. При изготовлении виски может использоваться ячмень, рожь, пшеница или кукуруза.'
        },
        {
            title: 'Интересный факт про виски',
            info: 'По некоторым данным и исследованиям, виски содержит ингибитор окисления – эллаговую кислоту, которая используется для лечения заболеваний сердца и препятствует развитию злокачественных опухолей. Во время 1920-1933 годов в США этот напиток был единственным разрешенным и применялся исключительно в медицинских целях.'
        },
        {
            title: 'Из чего делают виски',
            info: 'Солодовый виски (malt whiskey) — не менее 51 % ячменя; Ржаной виски (rye whiskey) — не менее 51 % ржи; Виски из соложеной ржи (malted rye whiskey) — не менее 51 % соложеной ржи; Пшеничный виски (wheat whiskey) — не менее 51 % пшеницы.'
        },
        {
            title: 'Кто изобрел виски',
            info: 'Первое документированное упоминание о виски в Шотландии датируется 1-ым июня 1494 года. Спустя более чем 400 лет технологию усовершенствовал шотландец Роберт Стейн, запатентовав модернизированный перегонный куб в 1827 году.'
        },
        {
            title: 'The Macallan',
            info: 'The Macallan in Lalique — самый дорогой виски в истории, проданный с аукциона за 460000$. Напиток, выдержка которого 64 года, имеет одну особенность — графин из натурального хрусталя. Уникальный сосуд был создан в единичном экземпляре мастерами знаменитого ювелирного дома Lalique старинным восковым методом.'
        },
    ]
    
    const accordion = document.querySelector('.accordion')
    
    const renderData = () => {
        data.forEach(el => {
            const accordionWrap = document.createElement('div')
            const accordionName = document.createElement('div')
            const title = document.createElement('p')
            const plus = document.createElement('img')
            const accordionContent = document.createElement('div')
            const info = document.createElement('p')
    
            info.textContent = el.info
            title.textContent = el.title
            title.className = 'acc-title'
            plus.src = '../accordion-img/plus-1469-svgrepo-com.svg'
    
            accordionWrap.className = 'accordion__wrap'
            accordionName.className = 'accordion__name'
            accordionContent.className = 'accordion__content'
            plus.className = 'plus'
            info.className = 'infoBlock'
    
            accordionName.append(title, plus)
            accordionContent.append(info)
            accordionWrap.append(accordionName,accordionContent)
            accordion.append(accordionWrap)
        });
    }
    renderData()
    
    const accordionClick = () => {
        const accordionWrapAll = document.querySelectorAll('.accordion__wrap')
        const plus = document.querySelector('.plus')
        accordionWrapAll.forEach((el, index) => {
            el.addEventListener('click', () => {
                accordionWrapAll.forEach((_, itemIndex) => {
                    if (index === itemIndex) {
                        accordionWrapAll[index].classList.toggle('accordion__active')
                    } else {
                        accordionWrapAll[itemIndex].classList.remove('accordion__active')
                    }
                })
            })
        })
    }
    accordionClick()
    
    const stopProp = () => {
        const accordionContents = document.querySelectorAll('.accordion__content')
        accordionContents.forEach(el => {
            el.addEventListener('click', (e) => {
                e.stopPropagation()
            })
        })
    }
    stopProp()
}
accordionAutoclose()