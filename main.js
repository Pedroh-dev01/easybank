document.addEventListener('DOMContentLoaded', function() {
    const iconHamburger = document.querySelector('.icon__hamburger')
    const navContainer = document.querySelector('.nav__container')
    const iconClose = document.querySelector('.icon__close')

    iconHamburger.addEventListener('click', function() {
        navContainer.classList.toggle('active')
        iconClose.classList.add('active')
        iconHamburger.classList.remove('active')
    });

    iconClose.addEventListener('click', function(){
        navContainer.classList.toggle('active')
        iconClose.classList.remove('active')
        iconHamburger.classList.add('active')
    })
});