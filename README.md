# Snake-Game
This is a simple Snake Game built using JavaScript, HTML, and CSS. The game is an interactive and classic rendition of the well-known snake game, where the player controls a growing snake to consume food while avoiding collisions with the wall or its own body.

## Features
Dynamic Gameplay: The snake continuously moves and grows with each food it consumes.

Randomized Food Position: The food appears at random positions on a 30x30 grid after the snake consumes it.

High Score Tracking: Your highest score is saved using localStorage, so you can keep track of your personal best even after closing the browser.

Keyboard & Touch Support: Control the snake using the arrow keys on the keyboard or by tapping the direction buttons on mobile devices.

Game Over Conditions: The game ends when the snake hits the wall or its own body, after which it can be restarted with a single click.

## How to Play
Use the arrow keys (or the on-screen touch controls) to change the direction of the snake.

Guide the snake to the food to increase your score.

Avoid colliding with the walls or the snake's body.

The game ends when you hit an obstacle. Click "OK" in the alert to restart the game.

## Customization
Game Speed: The snake moves at a fixed speed of 125 milliseconds per move, but this can be adjusted by changing the setInterval timing in the script.

Grid Size: The game board is a 30x30 grid, but this can be customized by adjusting the grid size in both the logic and CSS.
