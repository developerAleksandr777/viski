const burgerMemu = () => {
    const burger = document.querySelector('.burger-btn')
    const nav = document.querySelector('.nav')
    const backdrop__burger = document.querySelector('.backdrop__burger')
    
    burger.addEventListener('click', () => {
        burger.classList.toggle('show-burger-btn')
        nav.classList.toggle('show-nav')
        backdrop__burger.classList.toggle('show-backdrop')
    })

    backdrop__burger.addEventListener('click', () => {
        burger.classList.toggle('show-burger-btn')
        nav.classList.toggle('show-nav')
        backdrop__burger.classList.toggle('show-backdrop')
    })

    
}
burgerMemu()

