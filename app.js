const btnToggle = document.querySelector('.toggle-btn');
const mobileMenu = document.querySelector('.nav-menu');

/* ANIMACIÓN TOGGLE MENU */

function showMenu () {
    if (!mobileMenu.classList.contains('active-menu')) {
        mobileMenu.classList.add('active-menu');
        btnToggle.innerHTML = '<i class="fa-solid fa-xmark" style="color: #000000;"></i>';

    } else {
        mobileMenu.classList.remove('active-menu');
        btnToggle.innerHTML = '<i class="fa-solid fa-bars" style="color: #000000;"></i>'
    }
}

btnToggle.addEventListener('click', showMenu);

// TYPEWRITER

var app = document.getElementById('app');

new Typewriter('#app', {
    strings: ['IMPULSAMOS TU MARCA', 'HACEMOS LA COMUNICACIÓN DIGITAL'],
    autoStart: true,
    deleteSpeed: 2,
    loop: true,
});

// PLYR

const player = new Plyr('#player', {
    autoplay: true,
    muted: false,
    resetOnEnd: true,
});

// SCROLL CARDS

const hiddenElements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver ((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
            
        } else {
            entry.target.classList.remove('show');
        }
    });
})

hiddenElements.forEach((el) => observer.observe(el));