class ModalWindow {
	constructor() {
		const menuBtnFake = document.querySelector('.menu__button-fake')
		const modalElem = document.querySelector('.modal')

		modalElem.style.cssText = `
			display: flex;
			visibility: hidden;
			opacity: 0;
			transition: opacity 300ms ease-in-out;
		`

		const closeModal = event => {
			const target = event.target

			if (event.target === modalElem || target.closest('.modal__close')) {
				modalElem.style.opacity = 0

				setTimeout(() => {
				modalElem.style.visibility = 'hidden'
				}, 300)
			}
		}

		const openModal = () => {
			modalElem.style.visibility = 'visible'
			modalElem.style.opacity = 1
		}

		menuBtnFake.addEventListener('click', openModal)
		modalElem.addEventListener('click', closeModal)
	}
}

export default ModalWindow
