const btnToggle = document.querySelector('.toggle-btn');
const mobileMenu = document.querySelector('.nav-menu');
const bodyElement = document.querySelector('body');
const navLink = document.querySelectorAll('.menu-link');

/* ANIMACIÓN TOGGLE MENU */

function showMenu () {
    if (!mobileMenu.classList.contains('active-menu')) {
        mobileMenu.classList.add('active-menu');
        btnToggle.innerHTML = '<i class="fa-solid fa-xmark" style="color: #000000;"></i>';
        bodyElement.style.overflow = 'hidden';

    } else {
        mobileMenu.classList.remove('active-menu');
        btnToggle.innerHTML = '<i class="fa-solid fa-bars" style="color: #000000;"></i>';
        bodyElement.style.overflow = '';
    }
}

btnToggle.addEventListener('click', showMenu);

navLink.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active-menu');
        btnToggle.innerHTML = '<i class="fa-solid fa-bars" style="color: #000000;"></i>';
        bodyElement.style.overflow = '';  
    });
});

// PLYR

const player = new Plyr('#player', {
    autoplay: true,
    muted: false,
    resetOnEnd: true,
});


// TOGGLE SERVICIOS

const toggleServicios1 = document.querySelector('.btn-servicios-toggle-1');
const toggleServicios2 = document.querySelector('.btn-servicios-toggle-2');
const listServicios1 = document.querySelector('.list-servicios-1');
const listServicios2 = document.querySelector('.list-servicios-2');

function showServicios1 () {
    listServicios1.classList.toggle('show-servicios');    
}

function showServicios2 () {
    listServicios2.classList.toggle('show-servicios');    
}


toggleServicios1.addEventListener('click', showServicios1);
toggleServicios2.addEventListener('click', showServicios2);


// countUp

// Definir el CountUp fuera del evento scroll
let countUp1 = new CountUp('countup1', 0, 25000, 0, 3);

window.addEventListener('scroll', () => {
    // Comprobar si el contador no ha iniciado
    if (!countUp1.error && !countUp1.started) {
        countUp1.start();
    }
});

let countUp2 = new CountUp('countup2', 0, 33000, 0, 3);

window.addEventListener('scroll', () => {
    // Comprobar si el contador no ha iniciado
    if (!countUp2.error && !countUp2.started) {
        countUp2.start();
    }
});

let countUp3 = new CountUp('countup3', 0, 35, 0, 5);

window.addEventListener('scroll', () => {
    // Comprobar si el contador no ha iniciado
    if (!countUp3.error && !countUp3.started) {
        countUp3.start();
    }
});


let countUp4 = new CountUp('countup4', 0, 6500, 0, 3);

window.addEventListener('scroll', () => {
    // Comprobar si el contador no ha iniciado
    if (!countUp4.error && !countUp4.started) {
        countUp4.start();
    }
});



