'strict';
import { countTimer, addDays } from './modules/countTimer';
import togleMenu from './modules/togleMenu';
import togglePopup from './modules/togglePopup';
import scrollBtn from './modules/scrollBtn';
import tabs from './modules/tabs';
import slider from './modules/slider';
import command from './modules/command';
import calc from './modules/calc';
import sendForm from './modules/sendForm';
import { validForm1, validForm2, validForm3 } from './modules/validators';

// Timer
// if new client set localStorage timer
if (localStorage.startTimer === undefined) {
    localStorage.startTimer = addDays(new Date(), 1);
    countTimer(localStorage.startTimer);
} else {
    countTimer(localStorage.startTimer);
}
//Menu
togleMenu();
// popup
togglePopup();
// scroll button
scrollBtn();
// tabs
tabs();
// slider
slider();
// command
command();
// calculator
calc(100);
// validators

validForm1.init();
validForm2.init();
validForm3.init();

// maskPhone('.form-phone');
// send-ajax-form
sendForm();

