const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');

// Function to move the "No" button
function moveButton() {
    // Calculate random position (staying within screen bounds)
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;

    // Grow the Yes button
    const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = `${currentSize * 1.2}px`;
    yesBtn.style.padding = `${currentSize * 0.8}px ${currentSize * 1.5}px`;
}

// Hover for Desktop
noBtn.addEventListener('mouseover', moveButton);

// Click for Mobile (or if they manage to click it)
noBtn.addEventListener('click', moveButton);

// Success Action
yesBtn.addEventListener('click', () => {
    alert("Yay! See you on the 14th! 🥰");
});