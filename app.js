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
    muted: true,
    controls: ['play', 'mute', 'volume', 'play-large']
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


toggleServicios1.addEventListener('mouseover', showServicios1);
toggleServicios2.addEventListener('mouseover', showServicios2);


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


// NAV MENU ANIMATION 

document.addEventListener("DOMContentLoaded", function() {
    // Obtener todos los enlaces del menú
    const menuLinks = document.querySelectorAll(".menu-link");

    // Manejador de evento para actualizar el enlace activo al hacer scroll
    window.addEventListener("scroll", function() {
        // Obtener la posición actual del scroll
        let fromTop = window.scrollY;

        // Recorrer todos los enlaces del menú
        menuLinks.forEach(function(menuLink) {
            // Obtener el ID de la sección a la que apunta el enlace
            let section = document.querySelector(menuLink.hash);

            // Verificar si la sección está visible en la ventana
            if (
                section.offsetTop <= fromTop + 100 && // Ajusta el valor según tu diseño
                section.offsetTop + section.offsetHeight > fromTop + 100
            ) {
                // Si la sección está visible, añadir la clase 'active' al enlace correspondiente
                menuLink.classList.add("active-menu-link");
            } else {
                // Si no está visible, asegurarse de que el enlace no tenga la clase 'active'
                menuLink.classList.remove("active-menu-link");
            }
        });
    });
});
