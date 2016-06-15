/// <reference path="level.ts" />

/**
 * Game
 */
class Game {
    private level : Level;
    private dog : Dog;
    
    constructor() {
        this.level = new Level(1);
        this.dog = new Dog();
        
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    
    private gameLoop() {
        this.dog.move();

        requestAnimationFrame(this.gameLoop.bind(this));
    }
}