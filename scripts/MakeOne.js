class MakeOne {
	constructor() {
		function setCookie(name, value, days = 7) {
			const expires = new Date(Date.now() + days * 864e5).toUTCString()
			document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`
		}

		function getCookie(name) {
			return document.cookie.split('; ').reduce((r, v) => {
				const parts = v.split('=')
				return parts[0] === name ? decodeURIComponent(parts[1]) : r
			}, '')
		}

		document.addEventListener('DOMContentLoaded', () => {
			const form = document.querySelector('.make__one-bottom__form')
			const inputs = form.querySelectorAll('.form__input')

			inputs.forEach(input => {
				const val = getCookie(input.placeholder.toLowerCase())
				if (val) input.value = val
			})

			form.addEventListener('submit', (e) => {
				e.preventDefault()
				inputs.forEach(input => {
					setCookie(input.placeholder.toLowerCase(), input.value)
				})
				alert("Данные сохранены в cookies!")
				window.location.href = './index.html'
			})
		})
	}
}

new MakeOne()

export default MakeOne
