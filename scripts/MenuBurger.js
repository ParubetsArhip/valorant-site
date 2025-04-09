class MenuBurger {
    constructor() {
        const menuBody = document.querySelector('.menu__body')
        const menuBurger = document.querySelector('.menu__burger')
        const body = document.body

        if (menuBody && menuBurger) {
            menuBurger.addEventListener('click', () => {
                menuBurger.classList.toggle('active')
                menuBody.classList.toggle('active')
                body.classList.toggle('lock')
            })

            menuBody.addEventListener('click', () => {
                menuBurger.classList.remove('active')
                menuBody.classList.remove('active')
                body.classList.remove('lock')
            })
        }
    }
}

export default MenuBurger
