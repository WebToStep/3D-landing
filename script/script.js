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
        const btnMenu = document.querySelector('.menu'),
            btnClose = document.querySelector('.close-btn'),
            menu = document.querySelector('menu'),
            menuItems = menu.querySelectorAll('ul>li');

        const handlerMenu = () => {
            menu.classList.toggle('active-menu');
        };

        btnMenu.addEventListener('click', handlerMenu);
        btnClose.addEventListener('click', handlerMenu);
        menuItems.forEach(elem => elem.addEventListener('click', handlerMenu));


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
                        document.removeEventListener('click', closePopup);
                    }
                };
                document.addEventListener('click', e => closePopup(e));
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
});

