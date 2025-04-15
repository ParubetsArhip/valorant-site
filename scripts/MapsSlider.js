// class MapsSlider {
//     constructor() {
//         // import Swiper JS
//         import Swiper from 'swiper';
//         // import Swiper styles
//         import 'swiper/css';
//
//         const swiper = new Swiper("main-slider", {})
//     }
// }
//
// export default MapsSlider







// Импорт библиотеки Swiper и стилей
import Swiper from 'swiper/bundle';  // Импорт всей библиотеки
import 'swiper/swiper-bundle.css';    // Подключение стилей

// Твой код с использованием Swiper
class MapsSlider {
    constructor() {
        const swiper = new Swiper(".mySwiper", {
            loop: true,
            spaceBetween: 10,
            slidesPerView: 5,
            freeMode: true,
            watchSlidesProgress: true,
        });
        const swiper2 = new Swiper(".mySwiper2", {
            loop: true,
            spaceBetween: 10,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            thumbs: {
                swiper: swiper,
            },
        });
    }
}

export default MapsSlider;
