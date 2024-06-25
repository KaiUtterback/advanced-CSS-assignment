// scripts.js

let clickCount = 0;
let isDragging = false;
let lastX, lastY;
let cubeRotationX = 0, cubeRotationY = 0;

function incrementCounter() {
    clickCount++;
    document.getElementById('click-count').innerText = clickCount;
}

const cube = document.getElementById('cube');

cube.addEventListener('mousedown', (e) => {
    isDragging = true;
    lastX = e.clientX;
    lastY = e.clientY;
    cube.style.cursor = 'grabbing';
    e.preventDefault();
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    cube.style.cursor = 'grab';
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        const deltaX = e.clientX - lastX;
        const deltaY = e.clientY - lastY;
        cubeRotationX += deltaY * 0.5;
        cubeRotationY += deltaX * 0.5;
        cube.style.transform = `rotateX(${cubeRotationX}deg) rotateY(${cubeRotationY}deg)`;
        lastX = e.clientX;
        lastY = e.clientY;
    }
});
