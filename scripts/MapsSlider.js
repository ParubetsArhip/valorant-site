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

            const validMaps = data.filter(map =>
                map.splash && !map.displayName.toLowerCase().includes("range")
            );

            if (validMaps.length === 0) {
                throw new Error('No valid maps found!');
            }

            mapsContainer.innerHTML = `
                <div class="slider-container">
                    <!-- Серый фон -->
                    <div class="slider-bg"></div>

                   
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
            slidesPerView: "auto",
            spaceBetween: 10,
            freeMode: true,
            watchSlidesProgress: true,
            breakpoints: {
                1024: {
                    slidesPerView: 5,
                }
            }
        });

        new Swiper(".mySwiper2", {
            loop: true,
            spaceBetween: 0,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            thumbs: {
                swiper: thumbsSwiper,
            },
            effect: "fade",
            fadeEffect: {
                crossFade: true
            },
        });
    }
}

export default MapsSlider
