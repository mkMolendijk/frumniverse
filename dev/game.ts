/**
 * game
 */
class Game {
    private level : Level;
    private ghost : Ghost;
    
    constructor() {
        this.level = new Level(1);
        this.ghost = new Ghost();
        
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    
    private gameLoop() {
        this.ghost.move();
        
        requestAnimationFrame(this.gameLoop.bind(this));
    }
}