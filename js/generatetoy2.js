function generateToy2(toy) {

    toy.className = 'toy snake-toy';

    toy.style.backgroundColor = 'red';
    toy.style.animation = 'moveSnake 5s infinite';

    // Add keyframes for snake movement
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes moveSnake {
            0% { transform: translateX(0); }
            25% { transform: translateX(20px); }
            50% { transform: translateX(0); }
            75% { transform: translateX(-20px); }
            100% { transform: translateX(0); }
        }
    `;
    document.head.appendChild(style);

}
