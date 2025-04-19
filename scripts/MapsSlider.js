import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

class MapsSlider {
    constructor() {
        this.initSlider();
    }

    async initSlider() {
        try {
            const response = await fetch('https://valorant-api.com/v1/maps');
            const { data } = await response.json();
            const mapsContainer = document.querySelector('.block__maps-bottom');

            // Фильтруем карты: только с splash и исключаем "The Range"
            const validMaps = data.filter(map =>
                map.splash && !map.displayName.toLowerCase().includes("range")
            );

            if (validMaps.length === 0) {
                throw new Error('No valid maps found!');
            }

            // const specificMap = validMaps.find(map => map.displayName === "Bind")

            // Генерация HTML
            mapsContainer.innerHTML = `
                <div class="slider-container">
                    <!-- Серый фон -->
                    <div class="slider-bg"></div>

                    <!-- Верхний слайдер (большие изображения) -->
                    <div class="main-slider swiper mySwiper2">
                        <div class="swiper-wrapper">
                            ${validMaps.map(map => `
                                <div class="swiper-slide">
                                    <img src="${map.splash}" alt="${map.displayName}" />
                                    <div class="map-name">${map.displayName}</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Нижний слайдер (превью) -->
                    <div class="thumbs-slider swiper mySwiper">
                        <div class="swiper-wrapper">
                            ${validMaps.map(map => `
                                <div class="swiper-slide">
                                    <img src="${map.splash}" alt="${map.displayName}" />
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;

            // mapsContainer.innerHTML = `
            //     <div class="slider-container">
            //         <div class="slider-bg"></div>
            //
            //         <div class="main-slider swiper mySwiper2">
            //             <div class="swiper-wrapper">
            //                 <div class="swiper-slide">
            //                     <img src="${specificMap.splash}" alt="${specificMap.displayName}" />
            //                     <div class="map-name">${specificMap.displayName}</div>
            //                 </div>
            //             </div>
            //         </div>
            //
            //         <div class="thumbs-slider swiper mySwiper">
            //             <div class="swiper-wrapper">
            //                 <div class="swiper-slide">
            //                     <img src="${specificMap.splash}" alt="${specificMap.displayName}" />
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // `;

            this.initSwipers();
        } catch (error) {
            console.error('Error:', error);
            document.querySelector('.block__maps-bottom').innerHTML = `
                <p class="error">Failed to load maps. Please reload the page.</p>
            `;
        }
    }

    initSwipers() {
        // Нижний слайдер (превью)
        const thumbsSwiper = new Swiper(".mySwiper", {
            slidesPerView: "auto", // Автоподбор количества превью
            spaceBetween: 10,
            freeMode: true,
            watchSlidesProgress: true,
            breakpoints: {
                1024: {
                    slidesPerView: 5, // На ПК показываем 5 превью
                }
            }
        });

        // Верхний слайдер (основной)
        new Swiper(".mySwiper2", {
            loop: true,
            spaceBetween: 0,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            thumbs: {
                swiper: thumbsSwiper, // Связываем с нижним слайдером
            },
            // Эффект перехода (как на playvalorant.com)
            effect: "fade",
            fadeEffect: {
                crossFade: true
            },
        });
    }
}

export default MapsSlider




// import Swiper from 'swiper/bundle';
// import 'swiper/swiper-bundle.css';
//
// class MapsSlider {
//     constructor() {
//         this.initSlider();
//     }
//
//     async initSlider() {
//         try {
//             const res = await fetch('https://valorant-api.com/v1/maps');
//             const { data } = await res.json();
//             const maps = data.filter(m => m.splash && !m.displayName.toLowerCase().includes("range"));
//             if (!maps.length) throw new Error();
//
//             document.querySelector('.block__maps-bottom').innerHTML = `
//                 <div class="slider-container">
//                     <div class="slider-bg"></div>
//                     <div class="swiper mySwiper2">
//                         <div class="swiper-wrapper">
//                             ${maps.map(m => `
//                                 <div class="swiper-slide">
//                                     <img src="${m.splash}" alt="${m.displayName}" />
//                                     <div class="map-name">${m.displayName}</div>
//                                 </div>
//                             `).join('')}
//                         </div>
//                     </div>
//                     <div class="swiper mySwiper">
//                         <div class="swiper-wrapper">
//                             ${maps.map(m => `
//                                 <div class="swiper-slide">
//                                     <img src="${m.splash}" alt="${m.displayName}" />
//                                 </div>
//                             `).join('')}
//                         </div>
//                     </div>
//                 </div>
//             `;
//
//             this.initSwipers();
//         } catch {
//             document.querySelector('.block__maps-bottom').innerHTML = `<p class="error">Ошибка загрузки карт</p>`;
//         }
//     }
//
//     initSwipers() {
//         const thumbs = new Swiper(".mySwiper", {
//             slidesPerView: "auto",
//             spaceBetween: 10,
//             freeMode: true,
//             watchSlidesProgress: true,
//             breakpoints: {
//                 1024: { slidesPerView: 5 }
//             }
//         });
//
//         new Swiper(".mySwiper2", {
//             loop: true,
//             spaceBetween: 0,
//             effect: "fade",
//             fadeEffect: { crossFade: true },
//             thumbs: { swiper: thumbs },
//             navigation: {
//                 nextEl: ".swiper-button-next",
//                 prevEl: ".swiper-button-prev"
//             }
//         });
//     }
// }
//
// export default MapsSlider;
