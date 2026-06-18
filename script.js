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

// Typing Animation for Hero Title
if (document.getElementById('typed-hero')) {
    new Typed('#typed-hero', {
        strings: ['Find Peace &amp; <br><span class="text-gradient-gold">Heal Your Mind.</span>'],
        typeSpeed: 50,
        startDelay: 2200, // Wait for the 2s loading screen to finish + 200ms
        showCursor: true,
        cursorChar: '|',
        contentType: 'html'
    });
}

// Reviews Pagination
document.addEventListener('DOMContentLoaded', () => {
    const paginationContainer = document.getElementById('reviews-pagination');
    if (!paginationContainer) return;
    
    const buttons = paginationContainer.querySelectorAll('button');
    buttons.forEach((btn, idx) => {
        btn.addEventListener('click', () => {
            const pageNumber = idx + 1;
            const reviews = document.querySelectorAll('.review-item');
            const itemsPerPage = 3;
            
            reviews.forEach((review, index) => {
                review.classList.add('hidden');
                if (index >= (pageNumber - 1) * itemsPerPage && index < pageNumber * itemsPerPage) {
                    review.classList.remove('hidden');
                    // Retrigger AOS animation
                    review.classList.remove('aos-animate');
                    setTimeout(() => {
                        review.classList.add('aos-animate');
                    }, 50);
                }
            });

            // Update buttons
            buttons.forEach(b => {
                b.classList.remove('bg-gold1', 'text-white', 'shadow-md');
                b.classList.add('bg-gray-200', 'text-blackflare');
            });
            
            btn.classList.remove('bg-gray-200', 'text-blackflare');
            btn.classList.add('bg-gold1', 'text-white', 'shadow-md');
        });
    });
});
