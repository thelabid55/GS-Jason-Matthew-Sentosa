// ===================================
// MindUP - Main JavaScript
// ===================================

// Mobile menu toggle
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');

btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

// Close mobile menu on link click
const mobileLinks = menu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.add('hidden');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 20) {
        nav.classList.add('shadow-md');
    } else {
        nav.classList.remove('shadow-md');
    }
});

// Hero Image Carousel Animation
const heroImages = [
    document.getElementById('hero-img-0'),
    document.getElementById('hero-img-1'),
    document.getElementById('hero-img-2')
];
let currentHeroIndex = 0;

if (heroImages[0] && heroImages[1] && heroImages[2]) {
    setInterval(() => {
        // Fade out current
        heroImages[currentHeroIndex].classList.remove('opacity-100');
        heroImages[currentHeroIndex].classList.add('opacity-0');
        
        // Next index
        currentHeroIndex = (currentHeroIndex + 1) % heroImages.length;
        
        // Fade in next
        heroImages[currentHeroIndex].classList.remove('opacity-0');
        heroImages[currentHeroIndex].classList.add('opacity-100');
    }, 3000);
}

// Loading Screen logic
document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('opacity-0');
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500); // match transition duration
        }, 2000); // 2 seconds loading
    }
});

// AOS Animation Init
AOS.init({
    duration: 800,
    once: true,
    offset: 100,
});
