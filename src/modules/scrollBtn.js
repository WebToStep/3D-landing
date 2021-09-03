const scrollBtn = () => {
    const links = document.querySelectorAll('a');
    links.forEach(element => {
        const id = element.hash;
        if (element.hash[0] === '#' && element.hash !== '#close') {
            element.addEventListener('click', event => {
                event.preventDefault();
                document.querySelector(id).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });
        }
    });
};

export default scrollBtn;
