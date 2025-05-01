class Gekko {
   constructor() {
      const buttons = document.querySelectorAll('.footer__gekko-icon-btn')
      const videos = document.querySelectorAll('.footer__gekko-right__video')
      const abouts = document.querySelectorAll('.footer__gekko-right__about')

      buttons.forEach((button, index) => {
         button.addEventListener('click', (e) => {
            e.preventDefault()

            buttons.forEach(btn => {
               btn.style.filter = `
                 brightness(0)
                 invert(1)
                 grayscale(100%)
                 opacity(0.8)
               `
            })

            videos.forEach(video => video.style.display = 'none')
            abouts.forEach(about => about.style.display = 'none')

            button.style.filter = 'brightness(0) invert(1)'
            videos[index].style.display = 'block'
            abouts[index].style.display = 'block'
         })
      })
   }
}

new Gekko()

export default Gekko
