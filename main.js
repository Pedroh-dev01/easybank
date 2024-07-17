document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const iconHamburger = document.querySelector('.icon__hamburger');
    const iconClose = document.querySelector('.icon__close');
    const navContainer = document.querySelector('.nav__container');

    function toggleMenu() {
        header.classList.toggle('menu-open');
        navContainer.classList.toggle('active');
    }

    iconHamburger.addEventListener('click', toggleMenu);
    iconClose.addEventListener('click', toggleMenu);

    // Fechar o menu se clicar fora dele
    document.addEventListener('click', function(event) {
        const isClickInside = header.contains(event.target);
        if (!isClickInside && header.classList.contains('menu-open')) {
            toggleMenu();
        }
    });

    // Fechar o menu se a janela for redimensionada para um tamanho maior
    window.addEventListener('resize', function() {
        if (window.innerWidth > 980 && header.classList.contains('menu-open')) {
            toggleMenu();
        }
    });
});