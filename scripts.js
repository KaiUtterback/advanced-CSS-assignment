// scripts.js

let clickCount = 0;

function incrementCounter() {
    clickCount++;
    document.getElementById('click-count').innerText = clickCount;
}

const cube = document.getElementById('cube');

document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;
    cube.style.transform = `rotateX(${y * 360}deg) rotateY(${x * 360}deg)`;
});
