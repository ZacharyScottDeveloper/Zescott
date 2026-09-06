const whatamils = [
    "Beginner Developer",
    "Passionate Designer",
    "Deep Thinker",
    "High School Student",
    "Cool Guy",
    "EXtremely Cool Guy",
];

const whatamI = document.getElementById("whatamI");
let currentIndex = 0;

if (whatamI) {
    setInterval(() => {
        currentIndex = (currentIndex + 1) % whatamils.length;
        whatamI.textContent = whatamils[currentIndex];
    }, 2000);
}

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
