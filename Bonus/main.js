const div = document.createElement('div');

const todayDay = new Date();
let day = todayDay.toLocaleString('ru', { weekday: 'long', });
day = day.charAt(0).toUpperCase() + day.slice(1);
const time = todayDay.toLocaleTimeString('en');
const crystmasDay = new Date('01 january 2022');
const resultDays = Math.ceil((crystmasDay - todayDay) / 1000 / 60 / 60 / 24);

const hour = todayDay.getHours();

function goodDay() {
    if (hour >= 0 && hour < 6) {
        return 'Доброй ночи';
    } else if (hour >= 6 && hour < 12) {
        return 'Доброе утро';
    } else if (hour >= 12 && hour < 18) {
        return 'Добрый день';
    } else if (hour >= 18 && hour < 24) {
        return 'Доброй вечер';
    }
}

div.innerHTML = `${goodDay()}<br>
                  Сегодня: ${day}<br>
                  Текущее время: ${time}<br>
                  До нового года осталось ${resultDays} дней<br>
                  `;

document.body.append(div);
