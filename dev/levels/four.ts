/**
 * LevelFour
 */
class LevelFour extends Level{
    private timer: number;
    private rock: Platform;

    constructor() {
        super(4);

        this.enemyNames = ["ankers", "bessen", "cowboy", "douche", "ekster", "filmen", "gevaar", "heksen", "ijsjes", "jeetje", "keuken", "lusten", "mazzel", "najaar",
            "oranje", "punten", "quotes", "reuzen", "schaap", "tempel", "uurtje", "vijver", "windje", "zinken", "zwaard"];
        
        this.platform = new Platform(this, 4);
        this.platform.width = 217;
        this.platform.height = 182;
        this.platform.posX = (window.innerWidth - this.platform.width) / 2;
        this.platform.posY = (window.innerHeight - (this.platform.height + 100));
        this.enemySize = 6;

        this.platform.draw();

        this.rock = new Platform(this, 42);
        this.rock.width = 467;
        this.rock.height = 315;
        this.rock.posX = this.platform.posX + 575;
        this.rock.posY = this.platform.posY - this.rock.height;

        this.rock.draw();

        this.dog = new Dog(this, this.platform);

        this.timer = setInterval(this.createEnemy.bind(this), 2000);
    }

    private createEnemy() : void{
        this.enemies.push(new Enemy(this, 196, 221));
    }

    public remove() {
        clearInterval(this.timer);
        super.remove();
    }
}