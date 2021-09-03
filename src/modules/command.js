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

export default command;
