// Navigation mobile
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const nav = document.querySelector('.nav');

if (mobileMenuToggle && nav) {
    mobileMenuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
        
        // Animation du bouton hamburger
        const spans = mobileMenuToggle.querySelectorAll('span');
        if (mobileMenuToggle.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(8px, 8px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(8px, -8px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
}

// Smooth scrolling pour les liens d'ancrage
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const target = document.querySelector(targetId);
        if (target) {
            // Fermer le menu mobile si ouvert
            if (nav && nav.classList.contains('active')) {
                nav.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                
                const spans = mobileMenuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
            
            // Scroll vers la section
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Gestion du formulaire de contact
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Récupération des données du formulaire
        const formData = {
            nom: document.getElementById('nom').value,
            prenom: document.getElementById('prenom').value,
            email: document.getElementById('email').value,
            telephone: document.getElementById('telephone').value,
            sujet: document.getElementById('sujet').value,
            message: document.getElementById('message').value
        };
        
        // Simulation d'envoi (à remplacer par une vraie API)
        console.log('Formulaire soumis:', formData);
        
        // Message de confirmation
        alert('Merci pour votre message ! La mairie vous répondra dans les plus brefs délais.');
        
        // Réinitialisation du formulaire
        contactForm.reset();
    });
}

// Animation au scroll avec Intersection Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observer les éléments pour les animations
const animatedElements = document.querySelectorAll(
    '.highlight-card, .patrimoine-card, .actualite-card, .service-item, .mairie-card'
);

animatedElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(element);
});

// Gestion du header au scroll
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    }
    
    lastScroll = currentScroll;
});

// Mise à jour automatique de l'année dans le footer
const updateFooterYear = () => {
    const currentYear = new Date().getFullYear();
    const footerYearElements = document.querySelectorAll('.footer-bottom p');
    
    if (footerYearElements.length > 0) {
        const firstParagraph = footerYearElements[0];
        if (firstParagraph.textContent.includes('©')) {
            firstParagraph.textContent = `© ${currentYear} Mecquignies. Tous droits réservés.`;
        }
    }
};

updateFooterYear();

// Gestion responsive du menu
const handleResize = () => {
    if (window.innerWidth > 768) {
        nav.style.display = '';
        nav.classList.remove('active');
        
        if (mobileMenuToggle) {
            mobileMenuToggle.classList.remove('active');
            const spans = mobileMenuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    }
};

window.addEventListener('resize', handleResize);

// Highlight du lien actif dans la navigation
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav a[href^="#"]');

const highlightNavLink = () => {
    const scrollPosition = window.pageYOffset + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
};

window.addEventListener('scroll', highlightNavLink);

// Animation des statistiques au chargement
const animateStats = () => {
    const stats = document.querySelectorAll('.stat-number');
    
    stats.forEach(stat => {
        const text = stat.textContent;
        const isNumber = !isNaN(text.replace(/[^\d]/g, ''));
        
        if (isNumber) {
            const finalValue = parseInt(text.replace(/[^\d]/g, ''));
            let currentValue = 0;
            const increment = finalValue / 50;
            const duration = 1500;
            const stepTime = duration / 50;
            
            const timer = setInterval(() => {
                currentValue += increment;
                if (currentValue >= finalValue) {
                    stat.textContent = text;
                    clearInterval(timer);
                } else {
                    stat.textContent = `~${Math.floor(currentValue)}`;
                }
            }, stepTime);
        }
    });
};

// Lancer l'animation des stats quand la section hero est visible
const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStats();
            heroObserver.disconnect();
        }
    });
}, { threshold: 0.5 });

const heroSection = document.querySelector('.hero');
if (heroSection) {
    heroObserver.observe(heroSection);
}

// Validation du formulaire
const validateForm = () => {
    const emailInput = document.getElementById('email');
    const telephoneInput = document.getElementById('telephone');
    
    if (emailInput) {
        emailInput.addEventListener('blur', () => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailInput.value && !emailRegex.test(emailInput.value)) {
                emailInput.style.borderColor = '#dc3545';
            } else {
                emailInput.style.borderColor = '';
            }
        });
    }
    
    if (telephoneInput) {
        telephoneInput.addEventListener('input', (e) => {
            // Permettre uniquement les chiffres, espaces, points, tirets et +
            e.target.value = e.target.value.replace(/[^\d\s\.\-\+]/g, '');
        });
    }
};

validateForm();

// Toggle Conseil Municipal
const conseilToggle = document.getElementById('conseilToggle');
const conseilExpandable = document.getElementById('conseilExpandable');

if (conseilToggle && conseilExpandable) {
    conseilToggle.addEventListener('click', () => {
        const isExpanded = conseilExpandable.classList.contains('expanded');
        
        if (isExpanded) {
            // Fermer
            conseilExpandable.classList.remove('expanded');
            conseilToggle.classList.remove('active');
            conseilToggle.querySelector('.toggle-text').textContent = 'Voir tous les conseillers municipaux';
        } else {
            // Ouvrir
            conseilExpandable.classList.add('expanded');
            conseilToggle.classList.add('active');
            conseilToggle.querySelector('.toggle-text').textContent = 'Masquer les conseillers municipaux';
        }
    });
}

// Message de bienvenue dans la console (Easter egg)
console.log('%c🌳 Bienvenue sur le site de Mecquignies !', 'font-size: 20px; color: #2d5016; font-weight: bold;');
console.log('%cVillage du Nord de la France', 'font-size: 14px; color: #6c757d;');

