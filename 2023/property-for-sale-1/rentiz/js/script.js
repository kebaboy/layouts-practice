const burger = document.querySelector(".header__burger");
const menu = document.querySelector('.header__menu');

if (burger && menu) {
    burger.addEventListener('click', function() {
        this.classList.toggle('active');
        menu.classList.toggle("active");
        document.body.classList.toggle("lock");
    })
}

const filter = document.querySelector(".filter");

if (filter) {
    for (const block of filter.querySelectorAll(".block-filter")) {
        block.addEventListener('click', event => {
            block.querySelector(".block-filter__dropdown").classList.toggle("active");
            block.querySelector(".block-filter__icon").classList.toggle("active");
            if (event.target.classList.contains('block-filter__option')) {
                block.querySelector(".block-filter__value").textContent = event.target.textContent;
            }
        })
    }
}

const residenceSlider = new Swiper('.residence-slider', {
    spaceBetween: 20,
    slidesPerView: 1,
    loop: true,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        993: {
            slidesPerView: 3,
        },
        660: {
            slidesPerView: 2,
        },
        }
});

const quoteSlider = new Swiper('.slider-quote', {
    spaceBetween: 20,
    slidesPerView: 1,
    // loop: true,
    autoHeight: true,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // breakpoints: {
    //     // when window width is >= 320px
    //     993: {
    //         slidesPerView: 3,
    //     },
    //     660: {
    //         slidesPerView: 2,
    //     },
    //     }
});
