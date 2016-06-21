/**
 * LevelTwo
 */
class LevelTwo extends Level{
    private timer: number;
    private hill: Platform;
    private house: Platform;
    private tree: Platform;

    constructor() {
        super(2);

        this.enemyNames = ["acht", "boor", "cent", "duif", "egel", "fles", "goud", "hond", "iets", "jurk", "kamp", "leuk", "melk", "noot",
            "oost", "pech", "quiz", "raar", "snot", "tuin", "unie", "vlam", "wijs", "yoga", "zeur"];
        
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

        this.tree = new Platform(this, 23);
        this.tree.width = 181;
        this.tree.height = 435;
        this.tree.posX = this.platform.posX + 85;
        this.tree.posY = this.platform.posY - this.tree.height;

        this.tree.draw();

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