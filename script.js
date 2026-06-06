// Hero carousel slides
const heroSlides = [
    { image: 'assets/img/galeria1.jpg', title: 'FBSW 250W — 8 polegadas', link: '#products', linkText: 'Ver linha' },
    { image: 'assets/img/galeria2.jpg', title: 'Grave preciso, todo dia', link: '#products', linkText: 'Conhecer' },
    { image: 'assets/img/galeria3.png', title: 'FB10Z850X — 10 polegadas', link: '#products', linkText: 'Ver detalhes' },
    { image: 'assets/img/hero/04.webp', title: 'FBSW 450W — potência intermediária', link: '#products', linkText: 'Explorar' },
    { image: 'assets/img/hero/05.webp', title: 'Projetado para uso intenso', link: '#products', linkText: 'Ver produtos' },
    { image: 'assets/img/hero/06.webp', title: 'Cone carbono, carcaça injetada', link: '#products', linkText: 'Saiba mais' },
    { image: 'assets/img/hero/07.webp', title: 'FBSW 850W — linha premium', link: '#products', linkText: 'Ver linha' },
    { image: 'assets/img/hero/08.webp', title: 'De 250W a 3000W RMS', link: '#products', linkText: 'Comparar' },
    { image: 'assets/img/hero/09.webp', title: 'FB Audio — Fanatics Bass', link: '#products', linkText: 'Nossa linha' },
    { image: 'assets/img/hero/10.webp', title: 'Subwoofers para som automotivo', link: 'vendedores.html', linkText: 'Encontrar vendedor' }
];

// Dados dos produtos
const productsData = {
    1: {
        name: "SUBWOOFER FBSW 250W RMS",
        size: "8 Polegadas",
        description: "Subwoofer de alta qualidade com 250W RMS de potência. Ideal para quem busca graves precisos e definidos com excelente resposta de frequência. Projetado com materiais de primeira linha para garantir durabilidade e performance consistente.",
        images: ["assets/img/1-fb-sub-250-8-pol.jpg", "assets/img/1600-12.webp", "assets/img/1600-12.webp"],
        manual: "assets/pdf/manual-fbsw-250w-8pol.pdf"
    },
    2: {
        name: "SUBWOOFER FBSW 250W RMS",
        size: "12 Polegadas",
        description: "Subwoofer de 12 polegadas com 250W RMS. Oferece graves profundos e impactantes, perfeito para sistemas de som automotivo que exigem qualidade e potência equilibradas.",
        images: ["assets/img/1600-12.webp", "assets/img/1600-12.webp", "assets/img/1600-12.webp"],
        manual: "assets/pdf/FBSW-250-12.pdf"
    },
    3: {
        name: "SUBWOOFER FBSW 450W RMS",
        size: "8 Polegadas",
        description: "Modelo intermediário com 450W RMS em formato compacto de 8 polegadas. Combina potência e precisão, ideal para espaços reduzidos que não abrem mão de qualidade sonora.",
        images: ["assets/img/1600-12.webp", "assets/img/1600-12.webp", "assets/img/1600-12.webp"],
        manual: "assets/pdf/manual-fbsw-450w-8pol.pdf"
    },
    4: {
        name: "SUBWOOFER FBSW 450W RMS",
        size: "12 Polegadas",
        description: "Subwoofer de 12 polegadas com 450W RMS. Performance superior para reprodução de graves com clareza e impacto. Construção robusta para suportar uso intenso.",
        images: ["assets/img/1600-12.webp", "assets/img/1600-12.webp", "assets/img/1600-12.webp"],
        manual: "assets/pdf/manual-fbsw-450w-12pol.pdf"
    },
    5: {
        name: "SUBWOOFER FBSW 850W RMS",
        size: "8 Polegadas",
        description: "Alto-falante de alta performance com 850W RMS em tamanho compacto. Tecnologia avançada para máxima eficiência e graves potentes em qualquer volume.",
        images: ["assets/img/1600-12.webp", "assets/img/1600-12.webp", "assets/img/1600-12.webp"],
        manual: "assets/pdf/manual-fbsw-850w-8pol.pdf"
    },
    6: {
        name: "SUBWOOFER FBSW 850W RMS",
        size: "12 Polegadas",
        description: "Subwoofer premium de 12 polegadas com 850W RMS. Desenvolvido para entusiastas que buscam o máximo em qualidade e potência de graves.",
        images: ["assets/img/1600-12.webp", "assets/img/1600-12.webp", "assets/img/1600-12.webp"],
        manual: "assets/pdf/manual-fbsw-850w-12pol.pdf"
    },
    7: {
        name: "SUBWOOFER FBSW 850W RMS",
        size: "15 Polegadas",
        description: "O maior modelo da linha 850W, com 15 polegadas. Proporciona graves extremamente profundos e presença sonora incomparável.",
        images: ["assets/img/1600-12.webp", "assets/img/1600-12.webp", "assets/img/1600-12.webp"],
        manual: "assets/pdf/manual-fbsw-850w-15pol.pdf"
    },
    8: {
        name: "SUBWOOFER FBSW 1600W RMS",
        size: "12 Polegadas",
        description: "Subwoofer de alta potência com 1600W RMS. Engenharia de ponta para reprodução de graves extremos com controle e definição excepcionais.",
        images: ["assets/img/1600-12.webp", "assets/img/1600-12.webp", "assets/img/1600-12.webp"],
        manual: "assets/pdf/manual-fbsw-1600w-12pol.pdf"
    },
    9: {
        name: "SUBWOOFER FBSW 1600W RMS",
        size: "15 Polegadas",
        description: "Modelo de 15 polegadas com impressionantes 1600W RMS. Para sistemas que exigem o máximo em pressão sonora e qualidade de graves.",
        images: ["assets/img/1600-12.webp", "assets/img/1600-12.webp", "assets/img/1600-12.webp"],
        manual: "assets/pdf/manual-fbsw-1600w-15pol.pdf"
    },
    10: {
        name: "SUBWOOFER FBSW 3000W RMS",
        size: "12 Polegadas",
        description: "O topo de linha em potência compacta. 3000W RMS em 12 polegadas, para competições e sistemas extremos que exigem o máximo desempenho.",
        images: ["assets/img/1600-12.webp", "assets/img/1600-12.webp", "assets/img/1600-12.webp"],
        manual: "assets/pdf/manual-fbsw-3000w-12pol.pdf"
    },
    11: {
        name: "SUBWOOFER FBSW 3000W RMS",
        size: "15 Polegadas",
        description: "O modelo mais potente da FB Audio. 3000W RMS em 15 polegadas para os mais exigentes entusiastas de som automotivo. Performance sem compromissos.",
        images: ["assets/img/1600-12.webp", "assets/img/1600-12.webp", "assets/img/1600-12.webp"],
        manual: "assets/pdf/manual-fbsw-3000w-15pol.pdf"
    },
    12: {
        name: "SUBWOOFER FB10Z850X",
        size: "10 Polegadas",
        description: "Disponível nas impedâncias S2 e S4. Cone na cor carbono red com carcaça injetada e logotipo estampado em alto relevo.",
        images: ["assets/img/FB10Z850X.png", "assets/img/1600-12.webp", "assets/img/1600-12.webp"],
        manual: "assets/pdf/FB10Z850X.pdf"
    }
};

// DOM Elements
const modal = document.getElementById('productModal');
const modalClose = document.querySelector('.modal-close');
const mobileToggle = document.querySelector('.mobile-toggle');
const navMenu = document.querySelector('.nav-menu');

// Mobile Menu Toggle
if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            mobileToggle.classList.remove('active');
        }
    });

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            mobileToggle.classList.remove('active');
        });
    });
}

// Product Cards Click Handler
const productCards = document.querySelectorAll('.product-card');
if (productCards.length > 0) {
    productCards.forEach(card => {
        card.addEventListener('click', () => {
            const productId = card.getAttribute('data-product-id');
            openProductModal(productId);
        });
    });
}

// Open Product Modal
function openProductModal(productId) {
    const product = productsData[productId];
    if (!product) return;

    // Update modal content
    document.getElementById('modalProductName').textContent = product.name;
    document.getElementById('modalProductSize').textContent = product.size;
    document.getElementById('modalProductDescription').textContent = product.description;
    document.getElementById('modalManualLink').href = product.manual;

    // Update images
    const mainImage = document.getElementById('modalMainImage');
    mainImage.src = product.images[0];
    mainImage.alt = `${product.name} ${product.size}`;

    // Update thumbnails
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumb, index) => {
        if (product.images[index]) {
            thumb.src = product.images[index];
            thumb.alt = `${product.name} - Imagem ${index + 1}`;
            thumb.onclick = () => changeMainImage(product.images[index], index);
        }
    });

    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';

    // Animate modal entry
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
}

// Change main image when thumbnail is clicked
function changeMainImage(imageSrc, index) {
    const mainImage = document.getElementById('modalMainImage');
    mainImage.src = imageSrc;

    // Update active thumbnail
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
}

// Close Modal
function closeModal() {
    modal.classList.remove('active');
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }, 300);
}

// Modal close events
if (modalClose) {
    modalClose.addEventListener('click', closeModal);
}

// Close modal when clicking outside
if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
}

// Close modal with ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.style.display === 'block') {
        closeModal();
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const fadeElements = document.querySelectorAll('.fade-in');
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

fadeElements.forEach(element => {
    fadeObserver.observe(element);
});

// Lazy loading for images
const images = document.querySelectorAll('img[loading="lazy"]');
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
            }
            imageObserver.unobserve(img);
        }
    });
}, {
    rootMargin: '50px 0px'
});

images.forEach(img => {
    imageObserver.observe(img);
});

// Performance optimization - Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimize scroll events
let ticking = false;
function requestTick() {
    if (!ticking) {
        window.requestAnimationFrame(updateHeader);
        ticking = true;
    }
}

function updateHeader() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    ticking = false;
}

window.addEventListener('scroll', requestTick);

// Preload critical resources
function preloadImage(url) {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = url;
    document.head.appendChild(link);
}

// Preload logo and lineup hero
preloadImage('assets/logo-vermelho.png');
preloadImage('assets/img/linha.png');

// Service Worker Registration (for PWA and caching)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch(() => {
            // Service worker registration failed, app will still work
        });
    });
}

// Analytics and performance tracking
window.addEventListener('load', () => {
    // Track page load time silently
    if ('performance' in window) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        // Performance tracking - no console output
    }
});

// Handle form submissions (for future contact forms)
function handleFormSubmit(e) {
    e.preventDefault();
    // Form submission logic here
}

// Hero Carousel
function initHeroCarousel() {
    const track = document.getElementById('heroCarouselTrack');
    const dotsContainer = document.getElementById('heroCarouselDots');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');

    if (!track || !dotsContainer || heroSlides.length === 0) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let currentIndex = 0;
    let autoplayTimer = null;
    let touchStartX = 0;
    let isDragging = false;

    heroSlides.forEach((slide, index) => {
        const slideEl = document.createElement('article');
        slideEl.className = 'carousel-slide' + (index === 0 ? ' is-active' : '');
        slideEl.setAttribute('role', 'group');
        slideEl.setAttribute('aria-roledescription', 'slide');
        slideEl.setAttribute('aria-label', `${index + 1} de ${heroSlides.length}`);

        const loading = index === 0 ? 'eager' : 'lazy';
        const fetchPriority = index === 0 ? ' fetchpriority="high"' : '';

        const pictureHtml = slide.image.endsWith('.webp')
            ? `<picture><source srcset="${slide.image}" type="image/webp"><img src="${slide.image}" alt="${slide.title}" width="1600" height="1200" loading="${loading}"${fetchPriority}></picture>`
            : `<img src="${slide.image}" alt="${slide.title}" width="1600" height="1200" loading="${loading}"${fetchPriority}>`;

        slideEl.innerHTML = `
            <div class="carousel-slide-inner">
                <div class="carousel-image-wrap">
                    ${pictureHtml}
                </div>
                <div class="carousel-caption">
                    <h3>${slide.title}</h3>
                    <a href="${slide.link}" class="carousel-link">
                        ${slide.linkText}
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </a>
                </div>
            </div>
        `;
        track.appendChild(slideEl);

        const dot = document.createElement('button');
        dot.className = 'carousel-dot' + (index === 0 ? ' is-active' : '');
        dot.type = 'button';
        dot.setAttribute('role', 'tab');
        dot.setAttribute('aria-label', `Ir para slide ${index + 1}`);
        dot.setAttribute('aria-selected', index === 0 ? 'true' : 'false');
        dot.addEventListener('click', () => goTo(index));
        dotsContainer.appendChild(dot);
    });

    const slides = track.querySelectorAll('.carousel-slide');
    const dots = dotsContainer.querySelectorAll('.carousel-dot');

    function getSlideWidth() {
        const slide = slides[0];
        if (!slide) return 0;
        const gap = parseFloat(getComputedStyle(track).gap) || 20;
        return slide.offsetWidth + gap;
    }

    function updateTrack() {
        const offset = currentIndex * getSlideWidth();
        track.style.transform = `translateX(-${offset}px)`;

        slides.forEach((slide, i) => {
            const direct = Math.abs(i - currentIndex);
            const diff = Math.min(direct, heroSlides.length - direct);
            slide.classList.toggle('is-active', i === currentIndex);
            slide.classList.toggle('is-near', diff === 1);
        });

        dots.forEach((dot, i) => {
            dot.classList.toggle('is-active', i === currentIndex);
            dot.setAttribute('aria-selected', i === currentIndex ? 'true' : 'false');
        });
    }

    function goTo(index) {
        currentIndex = (index + heroSlides.length) % heroSlides.length;
        updateTrack();
        resetAutoplay();
    }

    function next() { goTo(currentIndex + 1); }
    function prev() { goTo(currentIndex - 1); }

    function startAutoplay() {
        if (prefersReducedMotion) return;
        stopAutoplay();
        autoplayTimer = setInterval(next, 5500);
    }

    function stopAutoplay() {
        if (autoplayTimer) {
            clearInterval(autoplayTimer);
            autoplayTimer = null;
        }
    }

    function resetAutoplay() {
        stopAutoplay();
        startAutoplay();
    }

    if (prevBtn) prevBtn.addEventListener('click', prev);
    if (nextBtn) nextBtn.addEventListener('click', next);

    track.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        isDragging = true;
        stopAutoplay();
    }, { passive: true });

    track.addEventListener('touchend', (e) => {
        if (!isDragging) return;
        const diff = touchStartX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) {
            diff > 0 ? next() : prev();
        } else {
            resetAutoplay();
        }
        isDragging = false;
    }, { passive: true });

    const showcase = track.closest('.showcase');
    if (showcase) {
        showcase.addEventListener('mouseenter', stopAutoplay);
        showcase.addEventListener('mouseleave', startAutoplay);
    }

    document.addEventListener('keydown', (e) => {
        if (!showcase || !document.body.contains(showcase)) return;
        if (e.key === 'ArrowLeft') prev();
        if (e.key === 'ArrowRight') next();
    });

    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(updateTrack, 150);
    });

    updateTrack();
    startAutoplay();
    preloadImage(heroSlides[0].image);
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    initHeroCarousel();
});
