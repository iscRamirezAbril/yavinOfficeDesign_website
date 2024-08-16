// |-----| Scroll Effect function |-----| //
function userScroll() {
    const navbar = document.querySelector('.navbar');

    if (navbar) {  // Verifica si navbar existe antes de continuar
        // Función para aplicar o eliminar la clase navbar-sticky
        const handleScroll = () => {
            if (window.scrollY > 50) {
                navbar.classList.add('navbar-sticky');
            } else {
                navbar.classList.remove('navbar-sticky');
            }
        };

        // Añade el manejador de scroll
        window.addEventListener('scroll', handleScroll);

        // Verifica el estado inicial al cargar la página
        handleScroll();
    } else {
        console.warn('Navbar no encontrada.');
    }
}
// |-----| Scroll Effect function |-----| //

// |-----| Stats Counter function |-----| //
function incrementStats() {
    const counters = document.querySelectorAll('.counter');

    counters.forEach((counter) => {
        counter.innerText = 0;

        const updateCounter = () => {
            const target = +counter.getAttribute('data-target');
            const c = +counter.innerText;

            const increment = target / 200;

            if (c < target) {
                counter.innerText = Math.ceil(c + increment);
                setTimeout(updateCounter, 1);
            } else {
                counter.innerText = target;
            }
        };

        updateCounter();
    });
}
// |-----| Stats Counter function |-----| //

document.addEventListener('DOMContentLoaded', incrementStats);
document.addEventListener('DOMContentLoaded', userScroll);