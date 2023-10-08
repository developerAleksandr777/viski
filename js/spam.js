const spam = () => {
    const backdrop__spam = document.querySelector('.backdrop-spam') 
    const modal__spam = document.querySelector('.modal-spam')  
    const crest__spam = document.querySelector('.crest-spam')


    setInterval(() => {
        backdrop__spam.classList.add('backdrop-spam-active')
        modal__spam.classList.add('modal-spam-active')
    }, 300000);

    setTimeout(() => {
        crest__spam.classList.add('crest-spam-active')
    }, 2000);

        crest__spam.addEventListener('click', () => {
            backdrop__spam.classList.remove('backdrop-spam-active')
            modal__spam.classList.remove('modal-spam-active')        
        })

    modal.addEventListener('click', (e) => {
        e.stopPropagation()
    })
}
spam()