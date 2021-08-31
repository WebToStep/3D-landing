/* eslint-disable no-undef */
/* eslint-disable no-trailing-spaces */
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
    // command
    const command = () => {
        const comandBlock = document.getElementById('command');

        const photoChenge = event => {
            if (!event.target.matches('.command__photo')) return;
            else {
                if (event.target.getAttribute('src') === event.target.dataset.img) {
                    event.target.setAttribute('src', event.target.dataset.img.replace(/a\.jpg/, '.jpg'));
                } else event.target.src = event.target.dataset.img;
            }
        };

        comandBlock.addEventListener("mouseover", photoChenge);
        comandBlock.addEventListener("mouseout", photoChenge);
    };
    command();
    // calculator
    const calc = (price = 100) => {
        const calcBlock = document.querySelector('.calc-block'),
            calcType = document.querySelector('.calc-type'),
            calcSquare = document.querySelector('.calc-square'),
            calcDay = document.querySelector('.calc-day'),
            calcCount = document.querySelector('.calc-count'),
            totalValue = document.getElementById('total');

        const countSum = () => {
            let total = 0,
                dayValue = 1,
                countValue = 1;
            const typeValue = calcType.options[calcType.selectedIndex].value,
                squareValue = +calcSquare.value;

            if (calcCount.value > 1) {
                countValue += (calcCount.value - 1) / 10;
            }

            if (calcDay.value && calcDay.value < 5) {
                dayValue *= 2;
            } else if (calcDay.value && calcDay.value < 10) {
                dayValue *= 1.5;
            }


            const totalRunNumbers = (num) => {
                let n = 0;
                const interval = setInterval(() => {
                    if (n < num) {
                        n += num / 100;
                        if (n > num) {
                            totalValue.textContent = Math.round(num);
                            clearInterval(interval);
                        }
                    }
                    if (n === num) {
                        totalValue.textContent = Math.round(num);
                        clearInterval(interval);
                    }
                    totalValue.textContent = Math.round(n);
                }, 1);
            };

            if (typeValue && squareValue) {
                total = price * typeValue * squareValue * countValue * dayValue;
                totalRunNumbers(total);
            }

        };

        calcBlock.addEventListener('change', (event) => {
            const target = event.target;
            if (target.matches('select') || target.matches('input')) {
                countSum();
            }
        });
    };
    calc(100);
    // validators
    const validForm1 = new Validator({
        selector: '#form1',
        pattern: {
            name: /[а-я ]/ig,
            email: /[\w\s\S@]/ig,
            phone: /[0-9+]/ig,
        },
        method: {
            'form1-name': [
                ['notEmpty'],
                ['pattern', 'name']
            ],
            'form1-phone': [
                ['notEmpty'],
                ['pattern', 'phone']
            ],
            'form1-email': [
                ['notEmpty'],
                ['pattern', 'email']
            ]
        },
        errorMessage: {
            'form1-name': 'Имя должно быть более 2х символов, Русского алфавита',
            'form1-phone': 'Телефон может содержать только цифры и знак +',
            'form1-email': 'Имя должно быть более 2х символов, Русского алфавита',
        }
    });
    validForm1.init();
    const validForm2 = new Validator({
        selector: '#form2',
        pattern: {
            name: /[а-я ]/ig,
            email: /[\w\s\S@]/ig,
            phone: /[0-9+]/ig,
            text: /[\w\s\S-.?!)(,:]/ig,
        },
        method: {
            'form2-name': [
                ['notEmpty'],
                ['pattern', 'name']
            ],
            'form2-phone': [
                ['notEmpty'],
                ['pattern', 'phone']
            ],
            'form2-email': [
                ['notEmpty'],
                ['pattern', 'email']
            ],
            'form2-message': [
                ['notEmpty'],
                ['pattern', 'text']
            ]
        }
    });
    validForm2.init();
    const validForm3 = new Validator({
        selector: '#form3',
        pattern: {
            name: /[а-я ]/ig,
            email: /[\w\s\S@]/ig,
            phone: /[0-9+]/ig,
        },
        method: {
            'form3-name': [
                ['notEmpty'],
                ['pattern', 'name']
            ],
            'form3-phone': [
                ['notEmpty'],
                ['pattern', 'phone']
            ],
            'form3-email': [
                ['notEmpty'],
                ['pattern', 'email']
            ],
        }
    });
    validForm3.init();
    // maskPhone('.form-phone');
    // send-ajax-form 
    const sendForm = () => {
        const postData = (body, outputData, errorData) => {
            const request = new XMLHttpRequest();
            request.addEventListener('readystatechange', () => {
                if (request.readyState !== 4) return;
                if (request.status === 200) outputData();
                else errorData(request.status);
            });
            request.open('POST', './server.php');
            request.setRequestHeader('Content-Type', 'aplication/json');
            request.send(JSON.stringify(body));
        };

        const forms = document.querySelectorAll('form');
        forms.forEach(item => {
            item.addEventListener('submit', (event) => {
                const statusMessage = document.createElement('div');
                statusMessage.style.cssText = `font-size: 2rem;
                                               color: #fff !important;`;
                const errorMessage = 'Что то пошло не так...',
                    successMessage = 'Спасибо! Мы скоро с вами свяжемся!',
                    loader = document.createElement('section');
                loader.innerHTML = `<div class='sk-circle-bounce'>
                                        <div class='sk-child sk-circle-1'></div>
                                        <div class='sk-child sk-circle-2'></div>
                                        <div class='sk-child sk-circle-3'></div>
                                        <div class='sk-child sk-circle-4'></div>
                                        <div class='sk-child sk-circle-5'></div>
                                        <div class='sk-child sk-circle-6'></div>
                                        <div class='sk-child sk-circle-7'></div>
                                        <div class='sk-child sk-circle-8'></div>
                                        <div class='sk-child sk-circle-9'></div>
                                        <div class='sk-child sk-circle-10'></div>
                                        <div class='sk-child sk-circle-11'></div>
                                        <div class='sk-child sk-circle-12'></div>
                                    </div>`;
                event.preventDefault();
                item.append(statusMessage);
                statusMessage.append(loader);

                const formData = new FormData(item);
                const body = {};
                formData.forEach((val, key) => body[key] = val);
                postData(
                    body,
                    () => {
                        event.target.querySelectorAll('input').forEach(elem => elem.value = '');
                        statusMessage.textContent = successMessage;
                    },
                    (error) => {
                        statusMessage.textContent = errorMessage;
                        console.error(error);
                    });
                item.querySelectorAll('input').forEach(elem => elem.classList.remove('success'));
                setTimeout(() => statusMessage.remove(), 5000);
            });
        });
    };
    sendForm();
});
