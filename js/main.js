// Ohrani Zdrav je - Main JavaScript

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

if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        mobileToggle.classList.toggle('active');
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

// Performance: Lazy load images
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src || img.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// Testimonials Carousel
let currentTestimonialSet = 0;
const testimonialCards = document.querySelectorAll('.testimonial-card');
const totalCards = testimonialCards.length;
const cardsPerSet = 3;
const totalSets = Math.ceil(totalCards / cardsPerSet);

function showTestimonialSet(setIndex) {
    // Hide all cards
    testimonialCards.forEach(card => {
        card.style.display = 'none';
        card.style.opacity = '0';
    });

    // Calculate which cards to show
    const startIndex = setIndex * cardsPerSet;
    const endIndex = Math.min(startIndex + cardsPerSet, totalCards);

    // Show cards for this set with fade-in
    for (let i = startIndex; i < endIndex; i++) {
        testimonialCards[i].style.display = 'block';
        // Trigger reflow for animation
        testimonialCards[i].offsetHeight;
        testimonialCards[i].style.opacity = '1';
    }
}

// Initialize testimonials carousel
if (testimonialCards.length > 0) {
    showTestimonialSet(0);

    // Auto-rotate every 5 seconds
    setInterval(() => {
        currentTestimonialSet = (currentTestimonialSet + 1) % totalSets;
        showTestimonialSet(currentTestimonialSet);
    }, 5000);
}
