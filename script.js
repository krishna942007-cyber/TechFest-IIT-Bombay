/* ==========================================
   CYBORG X - script.js (Part 1)
========================================== */

// ===========================
// Mobile Menu
// ===========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}

// ===========================
// Navbar Scroll Effect
// ===========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(5,8,22,.9)";
        header.style.backdropFilter = "blur(18px)";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.3)";

    } else {

        header.style.background = "rgba(5,8,22,.25)";
        header.style.boxShadow = "none";

    }

});

// ===========================
// Smooth Scroll
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// ===========================
// Animated Counters
// ===========================

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const counter = entry.target;

            const target = +counter.dataset.target;

            let current = 0;

            const speed = target / 80;

            function updateCounter(){

                current += speed;

                if(current < target){

                    counter.innerText = Math.floor(current);

                    requestAnimationFrame(updateCounter);

                }else{

                    counter.innerText = target;

                }

            }

            updateCounter();

            counterObserver.unobserve(counter);

        }

    });

});

counters.forEach(counter=>{

    counterObserver.observe(counter);

});

// ===========================
// Scroll Reveal
// ===========================

const revealElements = document.querySelectorAll(

".feature-card, .gallery-card, .timeline-item, .testimonial-card, .pricing-card"

);

const revealObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{

    threshold:0.15

});

revealElements.forEach(el=>{

    el.classList.add("hidden");

    revealObserver.observe(el);

});

// ===========================
// Active Navigation
// ===========================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", ()=>{

    let current = "";

    sections.forEach(section=>{

        const top = section.offsetTop - 120;

        const height = section.clientHeight;

        if(scrollY >= top){

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});