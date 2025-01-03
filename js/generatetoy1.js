function generateToy1(toy) {
    toy.className = 'toy sparkling-toy';

    // Add CSS for sparkling effect
    toy.style.backgroundColor = 'silver';
    toy.style.animation = 'sparkle 1s infinite';

    // Add keyframes for sparkling effect
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes sparkle {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
        }
    `;
    document.head.appendChild(style);
}
