/**
 * LevelFive
 */
class LevelFive extends Level{
    private timer: number;
    private hill: Platform;
    private house: Platform;

    constructor() {
        super(5);

        this.enemyNames = ["aardbei", "bananen", "cijfers", "dwergje", "egeltje", "frisbee", "griezel", "hoepels", "ijsbeer", "januari", "kristal", "lerares", "musical", "neefjes",
            "oceanen", "plezier", "rappers", "rondjes", "snoepen", "toeters", "uitgang", "voetbal", "website", "yoghurt", "zwemmen"];
        
        this.platform = new Platform(this, 2);
        this.platform.width = 1129;
        this.platform.height = 48;
        this.platform.posX = (window.innerWidth - this.platform.width) / 2;
        this.platform.posY = (window.innerHeight - (this.platform.height + 100));
        this.enemySize = 4;

        this.platform.draw();

        this.hill = new Platform(this, 21);
        this.hill.width = 554;
        this.hill.height = 164;
        this.hill.posX = this.platform.posX + 575;
        this.hill.posY = this.platform.posY - this.hill.height;

        this.hill.draw();

        this.house = new Platform(this, 22);
        this.house.width = 166;
        this.house.height = 142;
        this.house.posX = this.hill.posX + 85;
        this.house.posY = this.hill.posY - this.house.height;

        this.house.draw();

        this.dog = new Dog(this, this.platform);

        this.timer = setInterval(this.createEnemy.bind(this), 2000);
    }

    private createEnemy() : void{
        this.enemies.push(new Enemy(this, 210, 157));
    }

    public remove() {
        clearInterval(this.timer);
        super.remove();
    }
}