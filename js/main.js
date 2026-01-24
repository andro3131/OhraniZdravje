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

// Testimonials Auto-Rotation
const testimonialCards = document.querySelectorAll('.testimonial-card');
if (testimonialCards.length > 0) {
    // Get all cards
    const allCards = Array.from(testimonialCards);
    const totalCards = allCards.length;

    // Initially hide all cards except first 3
    allCards.forEach((card, index) => {
        if (index >= 3) {
            card.style.display = 'none';
        }
    });

    // Keep track of visible cards
    let visibleIndices = [0, 1, 2];

    // Rotate one random card every 7 seconds
    setInterval(() => {
        // Pick a random visible position to replace (0, 1, or 2)
        const positionToReplace = Math.floor(Math.random() * 3);
        const oldIndex = visibleIndices[positionToReplace];

        // Get available cards (not currently visible)
        const availableIndices = [];
        for (let i = 0; i < totalCards; i++) {
            if (!visibleIndices.includes(i)) {
                availableIndices.push(i);
            }
        }

        // Pick a random card from available ones
        if (availableIndices.length > 0) {
            const newIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];

            // Fade out old card
            allCards[oldIndex].style.transition = 'opacity 0.5s ease';
            allCards[oldIndex].style.opacity = '0';

            setTimeout(() => {
                // Hide old card and show new card
                allCards[oldIndex].style.display = 'none';
                allCards[newIndex].style.display = 'block';
                allCards[newIndex].style.opacity = '0';

                // Fade in new card
                setTimeout(() => {
                    allCards[newIndex].style.transition = 'opacity 0.5s ease';
                    allCards[newIndex].style.opacity = '1';
                }, 50);

                // Update visible indices
                visibleIndices[positionToReplace] = newIndex;
            }, 500);
        }
    }, 7000); // Every 7 seconds
}
