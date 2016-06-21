/**
 * LevelFive
 */
class LevelFive extends Level{
    private timer: number;
    private rock: Platform;
    private castle: Platform;

    constructor() {
        super(5);

        this.enemyNames = ["aardbei", "bananen", "cijfers", "dwergje", "egeltje", "frisbee", "griezel", "hoepels", "ijsbeer", "januari", "kristal", "lerares", "musical", "neefjes",
            "oceanen", "plezier", "rappers", "rondjes", "snoepen", "toeters", "uitgang", "voetbal", "website", "yoghurt", "zwemmen"];
        
        this.platform = new Platform(this, 5);
        this.platform.width = 505;
        this.platform.height = 195;
        this.platform.posX = (window.innerWidth - this.platform.width) / 2;
        this.platform.posY = (window.innerHeight - (this.platform.height + 100));
        this.enemySize = 7;

        this.platform.draw();

        this.rock = new Platform(this, 51);
        this.rock.width = 422;
        this.rock.height = 195;
        this.rock.posX = this.platform.posX + this.platform.width / 2 - this.rock.width / 2;
        this.rock.posY = this.platform.posY - this.rock.height;

        this.rock.draw();

        this.castle = new Platform(this, 52);
        this.castle.width = 68;
        this.castle.height = 71;
        this.castle.posX = this.rock.posX + this.rock.width / 2 - this.castle.width / 2;
        this.castle.posY = this.platform.posY - this.castle.height;

        this.castle.draw();

        this.dog = new Dog(this, this.platform);

        this.timer = setInterval(this.createEnemy.bind(this), 2000);
    }

    private createEnemy() : void{
        this.enemies.push(new Enemy(this, 280, 350));
    }

    public remove() {
        clearInterval(this.timer);
        super.remove();
    }
}