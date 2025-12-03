document.addEventListener("DOMContentLoaded", () => {
    const bubbles = document.querySelectorAll(".bubble");
    const scoreBox = document.getElementById("score");
    const resetBtn = document.getElementById("reset-btn");
    let score = 0;

    function randomSpot(bubble) {
        const x = Math.floor(Math.random() * 90);
        const y = Math.floor(Math.random() * 80);
        bubble.style.left = x + "%";
        bubble.style.top = y + "%";
    }

    function popBubble(event) {
        const bubble = event.currentTarget;
        bubble.classList.add("pop");
        score++;
        scoreBox.textContent = score;
        setTimeout(() => {
            bubble.classList.remove("pop");
            randomSpot(bubble);
        }, 350);
    }

    bubbles.forEach((bubble) => {
        bubble.addEventListener("click", popBubble);
    });

    resetBtn.addEventListener("click", () => {
        score = 0;
        scoreBox.textContent = score;
        bubbles.forEach((bubble) => {
            randomSpot(bubble);
        });
    });
});
