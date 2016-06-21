/// <reference path="level.ts" />
/// <reference path="levels/one.ts" />


/**
 * Game
 */
class Game {
    private level : Level;
    
    constructor() {
        this.level = new LevelFive();
        
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    
    private gameLoop() {
        this.level.update();
        this.nextLevel();

        requestAnimationFrame(this.gameLoop.bind(this));
    }

    private nextLevel() {
        if (this.level.bonesCount == 10) {
            if (this.level.goldBonesCount == 1) {
                this.level.remove();
                this.level = new LevelTwo();
            } else if (this.level.goldBonesCount == 2) {
                this.level.remove();
                this.level = new LevelThree();
            } else if (this.level.goldBonesCount == 3) {
                this.level.remove();
                this.level = new LevelFour();
            } else if (this.level.goldBonesCount == 4) {
                this.level.remove();
                this.level = new LevelFive();
            }
        }
    }
}