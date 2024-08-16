// |-----| Scroll Effect function |-----| //
function userScroll() {
    const navbar = document.querySelector('.navbar');
    const toTopBtn = document.querySelector('#to-top');

    if (navbar) { 
        const handleScroll = () => {
            if (window.scrollY > 50) {
                navbar.classList.add('navbar-sticky');
                toTopBtn.classList.add('show');
            } else {
                navbar.classList.remove('navbar-sticky');
                toTopBtn.classList.remove('show');
            }
        };

        window.addEventListener('scroll', handleScroll);

        handleScroll();
    } else {
        console.warn('Navbar no encontrada.');
    }
}
// |-----| Scroll Effect function |-----| //

// |-----| Scroll To Top function |-----| //
function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
// |-----| Scroll To Top function |-----| //

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

// |-----| Event Listeners |-----| //
document.addEventListener('DOMContentLoaded', incrementStats);
document.addEventListener('DOMContentLoaded', userScroll);
document.querySelector('#to-top').addEventListener('click', scrollToTop);
// |-----| Event Listeners |-----| //