// Scroll <nav>
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('nav a[href^="#"]');
    const navHeight = document.querySelector('header').offsetHeight; 

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); 

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const elementPosition = targetElement.offsetTop - navHeight;

                window.scrollTo({
                    top: elementPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});


// Flecha arriba
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.classList.add("show");
    } else {
        scrollToTopBtn.classList.remove("show");
    }
};

scrollToTopBtn.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});