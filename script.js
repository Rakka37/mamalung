document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    const hero = document.querySelector('.hero');
    const aboutSection = document.querySelector('#about');

    // Animasi pada navigasi saat di-scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > hero.offsetHeight - nav.offsetHeight) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Smooth scrolling
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                window.scrollTo({
                    top: targetSection.offsetTop - nav.offsetHeight,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animasi fade in pada section saat di-scroll
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});
