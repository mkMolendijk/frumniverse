/// <reference path="../platform.ts" />

/**
 * LevelOne
 */
class LevelOne extends Level{
    constructor() {
        super(1);

        this.enemyNames = ["aap", "bel", "cel", "dop", "eer", "fax", "gek", "hap", "ijs", "jas", "kip", "los", "mat", "nek", 
            "oma", "pop", "qua", "rib", "sla", "tip", "ufo", "vet", "wel", "yes", "zit"];

        this.platform = new Platform(this, 1);
        this.platform.width = 516;
        this.platform.height = 169;
        this.platform.posX = (window.innerWidth - this.platform.width) / 2;
        this.platform.posY = (window.innerHeight - (this.platform.height + 100));
        this.enemySize = 3;

        this.platform.draw();

        this.dog = new Dog(this, this.platform);
        this.enemies.push(new Enemy(this));
    }
}