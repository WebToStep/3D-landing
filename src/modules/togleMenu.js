const togleMenu = () => {
    const menu = document.querySelector('menu');

    document.addEventListener('click', event => {
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

export default togleMenu;
