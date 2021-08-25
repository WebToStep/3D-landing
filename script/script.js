/* eslint-disable arrow-parens */
window.addEventListener('DOMContentLoaded', () => {
    'strict';

    // Timer
    const countTimer = deadline => {
        const timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');

        const getTimeRemaning = () => {
            const dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000,
                seconds = ('0' + Math.floor(timeRemaining % 60)).slice(-2),
                minutes = ('0' + Math.floor((timeRemaining / 60) % 60)).slice(-2),
                hours = ('0' + Math.floor(timeRemaining / 60 / 60)).slice(-2);

            timerHours.textContent = hours;
            timerMinutes.textContent = minutes;
            timerSeconds.textContent = seconds;

            return timeRemaining;
        };

        const updateClock = () => {
            const timer = getTimeRemaning();
            let interval;
            if (timer > 0) {
                interval = setInterval(getTimeRemaning, 1000);
            } else {
                clearInterval(interval);

                timerHours.textContent = '00';
                timerMinutes.textContent = '00';
                timerSeconds.textContent = '00';
            }
        };
        updateClock();
    };

    // get timer +1 Day
    const addDays = (date, days) => {
        const result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    };
    // if new client set localStorage timer
    if (localStorage.startTimer === undefined) {
        localStorage.startTimer = addDays(new Date(), 1);
        countTimer(localStorage.startTimer);
    } else {
        countTimer(localStorage.startTimer);
    }

    //Menu
    const togleMenu = () => {
        const menu = document.querySelector('menu');

        document.addEventListener('click', (event) => {
            const target = event.target;
            if (menu.className === 'active-menu' && target.closest('a')) {
                event.preventDefault();
                menu.classList.toggle('active-menu');
            } else if (menu.className !== 'active-menu' && target.closest('.menu')) {
                menu.classList.toggle('active-menu');
            } else if (menu.className === 'active-menu' && !target.closest('menu')) {
                menu.classList.toggle('active-menu');
            }
        });
    };

    togleMenu();

    // popup
    const togglePopup = () => {
        const popup = document.querySelector('.popup'),
            popupContent = document.querySelector('.popup-content'),
            popupBtn = document.querySelectorAll('.popup-btn');

        popupBtn.forEach((elem) => {
            elem.addEventListener('click', () => {
                popup.style.display = 'block';
                if (screen.width > 768) {
                    let topStyle = -60,
                        opasityStyle = 0;

                    popupContent.style.opacity = opasityStyle;

                    const popupGo = () => {
                        const popupInterval = requestAnimationFrame(popupGo);
                        if (topStyle <= 10) {
                            topStyle += 10;
                            opasityStyle += 0.13;
                            popupContent.style.top = topStyle + '%';
                            popupContent.style.opacity = opasityStyle;
                        } else {
                            cancelAnimationFrame(popupInterval);
                        }
                    };
                    popupGo();
                }

                const closePopup = (e) => {
                    if (e.target.className === 'popup' || e.target.className === 'popup-close') {
                        popup.style.display = 'none';
                        popup.removeEventListener('click', closePopup);
                    }
                };
                popup.addEventListener('click', e => closePopup(e));
            });

        });
    };
    togglePopup();

    // scroll button
    const scrollBtn = () => {
        const links = document.querySelectorAll('a');
        links.forEach((element) => {
            const id = element.hash;
            if (element.hash[0] === '#' && element.hash !== '#close') {
                element.addEventListener('click', (event) => {
                    event.preventDefault();
                    document.querySelector(id).scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                });
            }
        });
    };
    scrollBtn();
    // tabs
    const tabs = () => {
        const tabHeader = document.querySelector('.service-header'),
            tab = document.querySelectorAll('.service-header-tab'),
            tabContent = document.querySelectorAll('.service-tab');
        const togleTabContent = (index) => {
            for (let i = 0; i < tabContent.length; i++) {
                if (index === i) {
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');
                } else {
                    tab[i].classList.remove('active');
                    tabContent[i].classList.add('d-none');
                }
            }
        };
        tabHeader.addEventListener('click', (event) => {
            let target = event.target;
            target = target.closest('.service-header-tab');

            if (target.classList.contains('service-header-tab')) {
                tab.forEach((item, index) => {
                    if (item === target) {
                        togleTabContent(index);
                    }
                });
            }

        });

    };
    tabs();
    // slider
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
        slider.addEventListener('click', (event) => {
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
        slider.addEventListener('mouseover', (event) => {
            if (event.target.matches('.portfolio-btn, .dot')) {
                stopSlide();
            }
        });
        slider.addEventListener('mouseout', (event) => {
            if (event.target.matches('.portfolio-btn, .dot')) {
                startSlide();
            }
        });
        startSlide(3000);
    };
    slider();
});
