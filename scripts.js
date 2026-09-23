     const whatamils = [
    "Beginner Developer",
    "Passionate Designer",
    "Unimaginably Cool Guy",
    "UX Designer",
    "Full stack developer",
    "Self Taught Scripter",
    "Extremely Cool Guy",
];

const whatamI = document.getElementById("whatamI");
let currentIndex = 0;

if (whatamI) {
    setInterval(() => {
        currentIndex = (currentIndex + 1) % whatamils.length;
        whatamI.textContent = whatamils[currentIndex];
    }, 2000);
}

const content = document.querySelector(".content");

addEventListener("scroll", () => {
    content.classList.toggle("active", scrollY > 0);
});

const cursorDot = document.querySelector(".cursor-dot");
const cursorTail = document.querySelector(".cursor-tail");

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let tailX = mouseX;
let tailY = mouseY;

window.addEventListener("mousemove", (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
});

function animateCursor() {
    tailX += (mouseX - tailX) * 0.12;
    tailY += (mouseY - tailY) * 0.12;

    if (cursorDot) {
        cursorDot.style.left = `${mouseX}px`;
        cursorDot.style.top = `${mouseY}px`;
    }

    if (cursorTail) {
        cursorTail.style.left = `${tailX}px`;
        cursorTail.style.top = `${tailY}px`;
    }

    requestAnimationFrame(animateCursor);
}

animateCursor();

let expanded = false;

const toggleBtn = document.querySelector(".projectsToggle");
const projects = document.querySelectorAll(".unimportant");

toggleBtn.addEventListener("click", () => {
    expanded = !expanded;

    projects.forEach(project => {
        project.classList.toggle("non-notable", !expanded);
    });

    toggleBtn.textContent = expanded
        ? "Show fewer projects ⌄"
        : "Show more projects >";
});

const content = document.querySelector(".content");

function updateHero() {
    content.classList.toggle("active", window.scrollY > 0);
}

updateHero();
window.addEventListener("scroll", updateHero);
