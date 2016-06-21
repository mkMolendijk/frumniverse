/// <reference path="../platform.ts" />

/**
 * LevelThree
 */
class LevelThree extends Level {
    
    private timer: number;
    private door: Platform;

    constructor() {
        super(3);

        this.enemyNames = ["aapje", "baard", "cavia", "druif", "elfje", "fluit", "geest", "hemel", "ijsje", "jagen", "klein", "lucht", "mesje", "nieuw",
            "ouder", "paard", "kwark", "ritje", "steen", "teken", "uilen", "visje", "weten", "zebra", "zwaai"];
        
        this.platform = new Platform(this, 3);
        this.platform.width = window.innerWidth;
        this.platform.height = 1;
        this.platform.posX = 0;
        this.platform.posY = window.innerHeight - 10;

        this.platform.draw();

        this.door = new Platform(this, 31);
        this.door.width = 68;
        this.door.height = 71;
        this.door.posX = (window.innerWidth - this.door.width) / 2;
        this.door.posY = window.innerHeight - this.door.height;

        this.enemySize = 5;

        this.door.draw();

        this.dog = new Dog(this, this.platform);

        this.timer = setInterval(this.createEnemy.bind(this), 2000);
    }

    private createEnemy() : void{
        this.enemies.push(new Enemy(this, 130, 110));
    }

    public remove() {
        clearInterval(this.timer);
        super.remove();
    }
}