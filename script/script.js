window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // Timer
    function countTimer(deadline) {
        const timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');

        function getTimeRemaning() {
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
        }

        function updateClock() {
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
        }
        updateClock();
    }


    // get timer +1 Day
    function addDays(date, days) {
        const result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }
    // if new client set localStorage timer
    if (localStorage.startTimer === undefined) {
        localStorage.startTimer = addDays(new Date(), 1);
        countTimer(localStorage.startTimer);
    } else {
        countTimer(localStorage.startTimer);
    }

});

