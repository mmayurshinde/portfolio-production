// Initialize AOS for animations
AOS.init({
    duration: 1000, // Animation duration in milliseconds
    once: true,     // Ensure animation happens only once
});

// Scroll-up button functionality
const scrollUpBtn = document.querySelector('.scroll-up-btn');
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollUpBtn.classList.add('show');
    } else {
        scrollUpBtn.classList.remove('show');
    }
});

scrollUpBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Smooth scroll for navigation links
const navLinks = document.querySelectorAll('.menu ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - 70, // Adjust for fixed navbar
            behavior: 'smooth'
        });
    });
});

// Navbar toggle functionality (responsive design)
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Close menu when clicking on a link (for mobile responsiveness)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});

// Initialize Owl Carousel for skills section
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
});

// Typing effect using Typed.js
const typed = new Typed('.typing', {
    strings: ['DevOps Engineer', 'Cloud Enthusiast', 'Automation Expert', 'Software Engineer'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// Form submission handler (new feature)
const contactForm = document.querySelector('form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Fetch input values
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;

    // Validate fields (basic validation)
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Simulate form submission (you can replace this with actual AJAX request)
    setTimeout(() => {
        alert('Thank you, ' + name + '! Your message has been sent successfully.');
        this.reset(); // Reset form fields
    }, 1000);
});
