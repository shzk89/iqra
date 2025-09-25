// Some random colors
const colors = [
    "#F44336",
    "#E91E63",
    "#9C27B0",
    "#673AB7",
    "#3F51B5",
    "#2196F3",
    "#03A9F4",
    "#00BCD4",
    "#009688",
    "#4CAF50",
    "#8BC34A",
    "#CDDC39",
    "#FFEB3B",
    "#FFC107",
    "#FF9800",
    "#FF5722",
];

const numBalls = 50;
const balls = [];

for (let i = 0; i < numBalls; i++) {
    let ball = document.createElement("div");
    ball.classList.add("ball");
    ball.style.background = colors[i % colors.length];
    ball.style.left = `${Math.floor(Math.random() * 80)}vw`;
    ball.style.top = `${Math.floor(Math.random() * 80)}vh`;
    ball.style.width = `${5 + (Math.random() * 5)}vw`;
    ball.style.height = ball.style.width;

    balls.push(ball);
    document.body.append(ball);
}

// Keyframes
balls.forEach((el, i) => {
    const rect = el.getBoundingClientRect();
    const minX = -rect.left; // left boundary
    const maxX = window.innerWidth - rect.right; // right boundary
    const minY = -rect.top; // top boundary
    const maxY = window.innerHeight - rect.bottom; // bottom boundary

    const x = Math.random() * (i % 2 === 0 ? minX : maxX);
    const y = Math.random() * (i % 2 === 0 ? minY : maxY);

    el.animate(
        [
            { transform: "translate(0, 0)" },
            { transform: `translate(${x}px, ${y}px)` }
        ],
        {
            duration: (Math.random() + 1) * 2000,
            direction: "alternate",
            fill: "both",
            iterations: Infinity,
            easing: "ease-in-out"
        }
    );
});

