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








import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

class MapsSlider {
    constructor() {
        const swiper = new Swiper(".mySwiper", {
            loop: true,
            spaceBetween: 10,
            slidesPerView: 5,
            freeMode: true,
            watchSlidesProgress: true,
            pagination: {
                el: ".swiper-pagination",
                type: true,
            },
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
            pagination: {
                el: ".swiper-pagination",
                type: "progressbar",
            },
        });
    }
}

export default MapsSlider;
