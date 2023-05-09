(() => {
    let openButton = document.querySelector('.js-open-menu');
    let closeButton = document.querySelector('.js-close-menu');
    let menu = document.querySelector('.mob-menu');
    openButton.addEventListener('click', () => {
        openButton.style.display = 'none';
        closeButton.style.display = 'block';
        menu.style.display = 'block';
    });
})();
  
