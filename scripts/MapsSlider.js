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
        const swiper = new Swiper('.main-slider', {
            // твои настройки слайдера
            loop: true,
            navigation: true,
            pagination: true,
        });
    }
}

export default MapsSlider;
