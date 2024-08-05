document.addEventListener('DOMContentLoaded', () => {
    const dot = document.querySelector('.dot');
    const speed = 200; // скорость движения точки
    let x = 0;
    let y = window.innerHeight / 2;

    function moveDot() {
        x += speed;
        if (x > window.innerWidth) {
            x = -20; // точка выходит за левую границу экрана
        }
        dot.style.transform = `translate(${x}px, ${y}px)`;
        requestAnimationFrame(moveDot);
    }

    moveDot();
});