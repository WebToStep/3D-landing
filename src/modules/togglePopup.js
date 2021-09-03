const togglePopup = () => {
    const popup = document.querySelector('.popup'),
        popupContent = document.querySelector('.popup-content'),
        popupBtn = document.querySelectorAll('.popup-btn');

    popupBtn.forEach(elem => {
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

            const closePopup = e => {
                if (e.target.className === 'popup' || e.target.className === 'popup-close') {
                    popup.style.display = 'none';
                    popup.removeEventListener('click', closePopup);
                }
            };
            popup.addEventListener('click', e => closePopup(e));
        });

    });
};

export default togglePopup;
