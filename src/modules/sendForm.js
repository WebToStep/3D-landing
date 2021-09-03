const sendForm = () => {
    const postData = body => fetch('./server.php', {
        method: 'POST',
        headers: { //Заголовки в основном используются только для POST запросов
            'Content-Type': 'aplication/json'
        },
        body: JSON.stringify(body)
    });

    const forms = document.querySelectorAll('form');
    forms.forEach(item => {
        item.addEventListener('submit', event => {
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
            postData(body)
                .then(response => {
                    if (response.status !== 200) {
                        throw new Error(response.status);
                    }
                    statusMessage.textContent = successMessage;
                }).catch(error => {
                    statusMessage.textContent = errorMessage;
                    console.error(error);
                });

            event.target.querySelectorAll('input').forEach(elem => elem.value = '');
            item.querySelectorAll('input').forEach(elem => elem.classList.remove('success'));
            setTimeout(() => statusMessage.remove(), 5000);
        });
    });
};

export default sendForm;
