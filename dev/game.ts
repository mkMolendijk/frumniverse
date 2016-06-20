/// <reference path="level.ts" />
/// <reference path="levels/one.ts" />


/**
 * Game
 */
class Game {
    private level : Level;
    
    constructor() {
        this.level = new LevelOne();
        
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    
    private gameLoop() {
        this.level.update();

        requestAnimationFrame(this.gameLoop.bind(this));
    }
}