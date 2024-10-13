// Home Section Animations
gsap.fromTo(".home .home-content .text-1", { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1, delay: 0.5 });
gsap.fromTo(".home .home-content .text-2", { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1, delay: 1 });
gsap.fromTo(".home .home-content .text-3", { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1, delay: 1.5 });
gsap.fromTo(".home .home-content a", { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1, delay: 2 });

// Background Image Parallax Scrolling
var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
    trigger: ".home",
    triggerHook: "onLeave",
    duration: 500
})
.setPin(".home")
.addTo(controller);

// About Section Animations
gsap.fromTo("#profileImage", { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1, delay: 0.5 });
gsap.fromTo(".about .about-content .right .text", { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1, delay: 1 });
gsap.fromTo(".about .about-content .right p", { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1, delay: 1.5 });
gsap.fromTo(".about .about-content .right a", { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1, delay: 2 });

// Services Section Animations
gsap.fromTo(".services .serv-content .card", { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1, stagger: 0.2 });

// Skills Section Animations
gsap.fromTo(".skills .skills-content .left .text", { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1, delay: 0.5 });
gsap.fromTo(".skills .skills-content .left p", { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1, delay: 1 });
gsap.fromTo(".skills .skills-content .left a", { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1, delay: 1.5 });

gsap.fromTo(".skills .skills-content .right .bars", { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1, delay: 0.5 });
gsap.fromTo(".skills .skills-content .right .info", { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1, delay: 1 });
gsap.fromTo(".skills .skills-content .right .line::before", { width: 0 }, { width: "100%", duration: 1, delay: 0.5 });

// Contact Section Animations
gsap.fromTo(".contact .contact-content .left .text", { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1, delay: 0.5 });
gsap.fromTo(".contact .contact-content .left p", { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1, delay: 1 });
gsap.fromTo(".contact .contact-content .left .icons", { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1, delay: 1.5 });
gsap.fromTo(".contact .contact-content .right .text", { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1, delay: 0.5 });
gsap.fromTo(".contact .contact-content .right form", { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1, delay: 1 });

// Navbar Animations
gsap.fromTo(".navbar", { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1, delay: 0.5 });
gsap.fromTo(".navbar .logo", { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 1, delay: 1 });
gsap.fromTo(".navbar .menu li", { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 1, delay: 1.5, stagger: 0.2 });

// Scroll-Up Button Animation
gsap.fromTo(".scroll-up-btn", { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1, delay: 0.5 });

// Typing Text Animation
var typed = new Typed(".typing", {
    strings: [ "Developer", "Programmer",  "Freelancer",],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

var typed = new Typed(".typing-2", {
    strings: ["Developer", "Programmer",  "Freelancer" ,],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// Owl Carousel Script
$('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
        0:{
            items: 1,
            nav: false
        },
        600:{
            items: 2,
            nav: false
        },
        1000:{
            items: 3,
            nav: false
        }
    }
});
