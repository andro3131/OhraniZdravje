// Ohrani Zdravje - Main JavaScript

// Initialize AOS (Animate on Scroll)
AOS.init({
    duration: 800,
    easing: 'ease-out-cubic',
    once: true,
    offset: 100
});

// Mobile Menu Toggle
const mobileToggle = document.getElementById('mobileToggle');
const mainNav = document.getElementById('mainNav');

if (mobileToggle && mainNav) {
    mobileToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        mobileToggle.classList.toggle('active');

        // Animate hamburger icon
        const spans = mobileToggle.querySelectorAll('span');
        spans.forEach(span => span.classList.toggle('active'));
    });

    // Close menu when clicking on a link
    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('active');
            mobileToggle.classList.remove('active');
        });
    });
}

// Scroll to Top Button
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Newsletter Form
const newsletterForm = document.getElementById('newsletterForm');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = e.target.querySelector('input[type="email"]').value;

        // TODO: Integrate with email service (EmailJS, Mailchimp, etc.)
        console.log('Newsletter signup:', email);

        // Show success message
        alert('Hvala za prijavo! Kmalu boste prejeli naše novice.');
        e.target.reset();
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Parallax effect for hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');

    if (heroBackground && scrolled < 800) {
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add loading class removal
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

