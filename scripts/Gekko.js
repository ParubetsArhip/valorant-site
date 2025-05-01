class Gekko {
   constructor() {
      // Buttons
      const btn1 = document.querySelector('.footer__gekko-icon-btn-1')
      const btn2 = document.querySelector('.footer__gekko-icon-btn-2')
      const btn3 = document.querySelector('.footer__gekko-icon-btn-3')
      const btn4 = document.querySelector('.footer__gekko-icon-btn-4')

      // Videos
      const video1 = document.querySelector('.footer__gekko-right__video-1')
      const video2 = document.querySelector('.footer__gekko-right__video-2')
      const video3 = document.querySelector('.footer__gekko-right__video-3')
      const video4 = document.querySelector('.footer__gekko-right__video-4')

      btn2.addEventListener('click', (e) => {
         e.preventDefault()
         btn1.style.cssText = `
         filter:
            brightness(0)
            invert(1)
            grayscale(100%)
            opacity(0.8);
         `
         btn2.style.cssText = `
         filter: brightness(0) invert(1);
         `
         video1.style.display = 'none'
         video2.style.display = 'block'
      })
   }
}

export default Gekko
