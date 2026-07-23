/* ==========================================
   CYBER QUIZ 4.0
   app.js
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    init();

});

function init() {

    loadingScreen();

    scrollAnimation();

    backToTop();

    smoothButton();

    navbarEffect();

}

/* ==========================================
   Loading
========================================== */

function loadingScreen() {

    const loader = document.querySelector(".loader");

    if (!loader) return;

    window.addEventListener("load", () => {

        setTimeout(() => {

            loader.style.opacity = "0";

            loader.style.visibility = "hidden";

        }, 800);

    });

}

/* ==========================================
   Fade Animation
========================================== */

function scrollAnimation() {

    const elements = document.querySelectorAll(".fade-up");

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: 0.2

    });

    elements.forEach(item => observer.observe(item));

}

/* ==========================================
   Navbar
========================================== */

function navbarEffect() {

    const header = document.querySelector("header");

    if (!header) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            header.style.background = "#07121f";

            header.style.boxShadow = "0 0 25px rgba(0,217,255,.2)";

        }

        else {

            header.style.background = "rgba(0,0,0,.35)";

            header.style.boxShadow = "none";

        }

    });

}

/* ==========================================
   Hero Button
========================================== */

function smoothButton() {

    const button = document.getElementById("startBtn");

    const topic = document.querySelector(".topics");

    if (!button || !topic) return;

    button.addEventListener("click", () => {

        topic.scrollIntoView({

            behavior: "smooth"

        });

    });

}

/* ==========================================
   Back To Top
========================================== */

function backToTop() {

    let button = document.getElementById("topBtn");

    if (!button) {

        button = document.createElement("button");

        button.id = "topBtn";

        button.innerHTML = "⬆";

        document.body.appendChild(button);

    }

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            button.style.display = "block";

        }

        else {

            button.style.display = "none";

        }

    });

    button.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

/* ==========================================
   Card Hover Animation
========================================== */

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px) scale(1.04)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px) scale(1)";

    });

});

/* ==========================================
   Counter Animation
========================================== */

const counters = document.querySelectorAll(".box h2");

function counterAnimation() {

    counters.forEach(counter => {

        const target = parseInt(counter.innerText);

        if (isNaN(target)) return;

        let count = 0;

        const speed = target / 60;

        const update = () => {

            count += speed;

            if (count < target) {

                counter.innerText = Math.floor(count);

                requestAnimationFrame(update);

            }

            else {

                counter.innerText = target;

            }

        }

        update();

    });

}

window.addEventListener("load", counterAnimation);

/* ==========================================
   Theme
========================================== */

let dark = true;

function toggleTheme() {

    if (dark) {

        document.body.style.background = "#ffffff";

        document.body.style.color = "#111";

    }

    else {

        document.body.style.background = "#07121f";

        document.body.style.color = "#ffffff";

    }

    dark = !dark;

}

/* ==========================================
   Keyboard
========================================== */

document.addEventListener("keydown", e => {

    if (e.key === "Home") {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }

});

/* ==========================================
   Console
========================================== */

console.log("%cCyber Quiz 4.0 - app.js:308",

"color:#00d9ff;font-size:25px;font-weight:bold");

console.log("Developed by Cyber Quiz Team - app.js:312");

/* ==========================================
   END
========================================== */