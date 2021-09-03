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


        const totalRunNumbers = num => {
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

    calcBlock.addEventListener('change', event => {
        const target = event.target;
        if (target.matches('select') || target.matches('input')) {
            countSum();
        }
    });
};

export default calc;
