import $ from '../core';

$.prototype.carousel = function (autoplayInterval = 3000) {
    for (let i = 0; i < this.length; i++) {
        const width = window.getComputedStyle(this[i].querySelector('.carousel-inner')).width;// ширина carousel-inner из браузера
        const slides = this[i].querySelectorAll('.carousel-item');// слайды
        const slidesField = this[i].querySelector('.carousel-slides');// обертка слайдов
        const dots = this[i].querySelectorAll('.carousel-indicators li');// точки-индикаторы слайдов

        let offset = 0;
        let slideIndex = 0;
        let timerId;

        slidesField.style.width = 100 * slides.length + '%';// задаем ширину carousel-slides в зависимости от количества слайдов
        slides.forEach(item => {// задаем ширину для каждого слайда равной width, т.к. будет показываться по одному слайду
            item.style.width = width;
        });


        $(this[i].querySelector('[data-slide="next"]')).click((event) => {
            event.preventDefault();
            if (offset == (+width.replace(/\D/g, '') * (slides.length - 1))) {
                offset = 0;
            } else {
                offset += +width.replace(/\D/g, '');
            }

            slidesField.style.transform = `translateX(-${offset}px)`;

            if (slideIndex == slides.length - 1) {
                slideIndex = 0;
            } else {
                slideIndex++;
            }
            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');
        });

        $(this[i].querySelector('[data-slide="prev"]')).click((event) => {
            event.preventDefault();
            if (offset == 0) {
                offset = +width.replace(/\D/g, '') * (slides.length - 1);
            } else {
                offset -= +width.replace(/\D/g, '');
            }

            slidesField.style.transform = `translateX(-${offset}px)`;

            if (slideIndex == 0) {

                slideIndex = slides.length - 1;
            } else {
                slideIndex--;
            }
            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');
        });

        const sliderId = $(this[i]).getAttr('id');
        $(`#${sliderId} .carousel-indicators li`).click(e => {
            const slideTo = $(e.target).getAttr('data-slide-to');

            slideIndex = slideTo;
            offset = +width.replace(/\D/g, '') * slideTo;

            slidesField.style.transform = `translateX(-${offset}px)`;

            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');
        });
    
        const activateAutoplay = () => {
            timerId = setInterval(() => {
                $(this[i].querySelector('[data-slide="next"]')).click();
            }, autoplayInterval);
        };

        if (autoplayInterval) {
            activateAutoplay();

            $(this[i]).on('mouseenter', () => clearInterval(timerId));
            $(this[i]).on('mouseleave', () => activateAutoplay());
        }
    }
};

$('.carousel').carousel();