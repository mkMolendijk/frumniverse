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
        this.nextLevel();

        requestAnimationFrame(this.gameLoop.bind(this));
    }

    private nextLevel() {
        switch(this.level.bonesCount + this.level.goldBonesCount) {
            case 11:
                this.level.remove();
                this.level = new LevelTwo();
                break;
            case 12:
                this.level.remove();
                this.level = new LevelThree();
                break;
            case 13:
                this.level.remove();
                this.level = new LevelFour();
                break;
            case 14:
                this.level.remove();
                this.level = new LevelFive();
                break;
        }
    }
}