/// <reference path="level.ts" />

/**
 * Game
 */
class Game {
    private level : Level;
    
    constructor() {
        this.level = new Level(1);
        
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    
    private gameLoop() {
        this.level.update();

        requestAnimationFrame(this.gameLoop.bind(this));
    }
}