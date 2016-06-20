/// <reference path="dog.ts" />
/// <reference path="platform.ts" />
/// <reference path="enemy.ts" />


/**
 * Level
 * Parent class for all levels
 */
class Level {
    
    public div: HTMLElement;
    public platform: any;
    protected dog: Dog;
    public enemyNames: Array<string>;
    protected enemies: Array<Enemy>;
    protected lettersTyped: string = "";
    protected enemySize: number;
    
    constructor(stage : number) {
        this.div = document.createElement("level");
        this.div.id = "level" + stage;
        document.body.appendChild(this.div);

        this.enemies = new Array();

        window.addEventListener("keydown", this.onKeyDown.bind(this));
    }

    public onKeyDown(event: KeyboardEvent):void {
        switch(event.keyCode) {
            case 65:
                this.lettersTyped += 'a';
                break;
            case 66:
                this.lettersTyped += 'b';
                break;
            case 67:
                this.lettersTyped += 'c';
                break;
            case 68:
                this.lettersTyped += 'd';
                break;
            case 69:
                this.lettersTyped += 'e';
                break;
            case 70:
                this.lettersTyped += 'f';
                break;
            case 71:
                this.lettersTyped += 'g';
                break;
            case 72:
                this.lettersTyped += 'h';
                break;
            case 73:
                this.lettersTyped += 'i';
                break;
            case 74:
                this.lettersTyped += 'j';
                break;
            case 75:
                this.lettersTyped += 'k';
                break;
            case 76:
                this.lettersTyped += 'l';
                break;
            case 77:
                this.lettersTyped += 'm';
                break;
            case 78:
                this.lettersTyped += 'n';
                break;
            case 79:
                this.lettersTyped += 'o';
                break;
            case 80:
                this.lettersTyped += 'p';
                break;
            case 81:
                this.lettersTyped += 'q';
                break;
            case 82:
                this.lettersTyped += 'r';
                break;
            case 83:
                this.lettersTyped += 's';
                break;
            case 84:
                this.lettersTyped += 't';
                break;
            case 85:
                this.lettersTyped += 'u';
                break;
            case 86:
                this.lettersTyped += 'v';
                break;
            case 87:
                this.lettersTyped += 'w';
                break;
            case 88:
                this.lettersTyped += 'x';
                break;
            case 89:
                this.lettersTyped += 'y';
                break;
            case 90:
                this.lettersTyped += 'z';
                break;
        }
    }

    public checkEnemies():void {
        if (this.lettersTyped.length == this.enemySize) {
            for (let i = 0; i < this.enemies.length; i++) {
                if (this.lettersTyped == this.enemies[i].name) {
                    this.enemies[i].remove();
                }
            }

            this.lettersTyped = "";
        }
    }

    public update() {
        this.dog.move();
        
        for(let i = 0; i < this.enemies.length; i++) {
            this.enemies[i].draw();
        }

        this.checkEnemies();
    }
}