const slider = () => {
    const slide = document.querySelectorAll('.portfolio-item'),
        slider = document.querySelector('.portfolio-content'),
        dots = document.querySelector('.portfolio-dots');

    let currentSlide = 0,
        interval;
    const addDots = () => {
        slide.forEach(() => {
            const newDot = document.createElement('li');
            newDot.classList.add('dot');
            dots.append(newDot);
        });
    };
    addDots();
    const dot = document.querySelectorAll('.dot');
    dot[0].classList.add('dot-active');

    const prevSlide = (el, index, strClass) => {
        el[index].classList.remove(strClass);
    };
    const nextSlide = (el, index, strClass) => {
        el[index].classList.add(strClass);
    };
    const autoPlaySlide = () => {
        prevSlide(slide, currentSlide, 'portfolio-item-active');
        prevSlide(dot, currentSlide, 'dot-active');

        currentSlide++;
        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }

        nextSlide(slide, currentSlide, 'portfolio-item-active');
        nextSlide(dot, currentSlide, 'dot-active');
    };
    const startSlide = (time = 3000) => {
        interval = setInterval(autoPlaySlide, time);
    };
    const stopSlide = () => {
        clearInterval(interval);
    };
    slider.addEventListener('click', event => {
        event.preventDefault();
        const target = event.target;

        if (!target.matches('.portfolio-btn, .dot')) {
            return;
        }

        prevSlide(slide, currentSlide, 'portfolio-item-active');
        prevSlide(dot, currentSlide, 'dot-active');

        if (target.matches('#arrow-right')) {
            currentSlide++;
        } else if (target.matches('#arrow-left')) {
            currentSlide--;
        } else if (target.matches('.dot')) {
            dot.forEach((el, index) => {
                if (el === target) {
                    currentSlide = index;
                }
            });
        }
        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }
        if (currentSlide < 0) {
            currentSlide = slide.length - 1;
        }
        nextSlide(slide, currentSlide, 'portfolio-item-active');
        nextSlide(dot, currentSlide, 'dot-active');
    });
    slider.addEventListener('mouseover', event => {
        if (event.target.matches('.portfolio-btn, .dot')) {
            stopSlide();
        }
    });
    slider.addEventListener('mouseout', event => {
        if (event.target.matches('.portfolio-btn, .dot')) {
            startSlide();
        }
    });
    startSlide(3000);
};

export default slider;
