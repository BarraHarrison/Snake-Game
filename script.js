const playBoard = document.querySelector(".play-board");
const scoreElement = document.querySelector(".score");
const highScoreElement = document.querySelector(".high-score");
const controls = document.querySelectorAll(".controls i");

let gameOver = false;
let foodX, foodY;
let snakeX = 5, snakeY = 10; // Snake head position will be fixed at the start
let snakeBody = [];
let velocityX = 0, velocityY = 0;
let setintervalId;
let score = 0;

let highScore = localStorage.getItem("high-score") || 0; // Gets the high-score from local storage
highScoreElement.innerText = `High Score: ${highScore}`;

const changeFoodPosition = () => {
    // A random value from 1 - 30 is passed to move the food position
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1;
}

const handleGameOver = () => {
    // Clears the timer and reloads the page once the game is over
    clearInterval(setintervalId);
    alert("Game over! Press OK to play again.");
    location.reload();
}

const changeDirection = (e) => {
    // Changes the direction of the snake head based on what key is pressed
    if (e.key === "ArrowUp" && velocityY != 1) {
        velocityX = 0;
        velocityY = -1;
    } else if (e.key === "ArrowDown" && velocityY != -1) {
        velocityX = 0;
        velocityY = 1;
    } else if (e.key === "ArrowLeft" && velocityX != 1) {
        velocityX = -1;
        velocityY = 0;
    } else if (e.key === "ArrowRight" && velocityX != -1) {
        velocityX = 1;
        velocityY = 0;
    }
    initGame();
}

controls.forEach(key => {
    // When the key is clicked changeDirection is called
    key.addEventListener("click", () => changeDirection({ key: key.dataset.key }));
});


const initGame = () => {
    if (gameOver) return handleGameOver();
    let htmlMarkup = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;

    // Checks if the snake gets the food
    if (snakeX === foodX && snakeY === foodY) {
        changeFoodPosition();
        snakeBody.push([foodX, foodY]); // Pushes the food position into the Snake body
        score++; // Increment score by 1

        highScore = score >= highScore ? score : highScore; // Set high score to score value if it is a new high score
        localStorage.setItem("high-score", highScore);
        scoreElement.innerText = `Score: ${score}`;
        highScoreElement.innerText = `High Score: ${highScore}`;
    }

    for (let i = snakeBody.length - 1; i > 0; i--) {
        // Shifts the values of the elements in the snake body by 1
        snakeBody[i] = snakeBody[i - 1];
    }

    snakeBody[0] = [snakeX, snakeY]; // This sets the snake body to the current snake position

    // Updates the snake head's position based on the current velocity
    snakeX += velocityX;
    snakeY += velocityY;


    //Checks if the snake's head hits the wall, the game is then over
    if (snakeX <= 0 || snakeX > 30 || snakeY <= 0 || snakeY > 30) {
        gameOver = true;
    }

    for (let i = 0; i < snakeBody.length; i++) {
        // Adding a div for each part of the snake's body
        htmlMarkup += `<div class="head" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`;

        // If the snake hits its own body, the game is over
        if (i != 0 && snakeBody[0][1] === snakeBody[i][1] && snakeBody[0][0] === snakeBody[i][0]) {
            gameOver = true;
        }
    }

    playBoard.innerHTML = htmlMarkup;
}
changeFoodPosition();

// 125 milliseconds is the speed of the snake
// The snake will continuously move instead of moving with every click
setintervalId = setInterval(initGame, 125);

document.addEventListener("keydown", changeDirection);