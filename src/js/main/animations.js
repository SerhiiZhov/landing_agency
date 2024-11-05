
function startHero() {
   
    document.documentElement.style.overflow = 'visible';

    
    document.querySelector('.container--fullscreen').style.animationPlayState = 'running';
    document.querySelector('.menu__button').style.animationPlayState = 'running';
    document.querySelector('.header__menu').style.animationPlayState = 'running';
}


document.querySelector('.header__logo_w').addEventListener('animationend', (event) => {
    if (event.animationName === 'logoMove') { 
        startHero();
    }
})
