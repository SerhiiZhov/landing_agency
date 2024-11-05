const header = document.querySelector('.header');
const mediaQuery2 = window.matchMedia('(max-width: 1023.89px)');

function handleScroll() {
    if (window.scrollY > 50) {
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
}

function checkScreenWidth() {
    if (mediaQuery2.matches) {
        window.addEventListener('scroll', handleScroll);
    } else {
        window.removeEventListener('scroll', handleScroll);
        header.classList.remove('shrink'); 
    }
}

checkScreenWidth();
mediaQuery2.addEventListener('change', checkScreenWidth);