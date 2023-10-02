gsap.from('.logo', { opacity: 0, duration: 0.5, delay: 1, y: 10 })
gsap.from('.navbar .nav_item', { opacity: 0, duration: 0.5, delay: 1.1, y: 30, stagger: 0.1 })
gsap.from('.home .title', { opacity: 0, duration: 0.5, delay: 0.6, y: 30 })
gsap.from('.description', { opacity: 0, duration: 0.5, delay: 0.8, y: 30 })
gsap.from('.btn', { opacity: 0, duration: 0.5, delay: 1.1, y: 30 })
gsap.from('.social-links .social-icon', { opacity: 0, duration: 0.5, delay: 1.1, y: 30, stagger: 0.1 })


document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    function highlightNavLink() {
        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
                navLinks.forEach((link) => link.classList.remove("active"));
                navLinks[index].classList.add("active");
            }
        });
    }
    window.addEventListener("scroll", highlightNavLink);
});
