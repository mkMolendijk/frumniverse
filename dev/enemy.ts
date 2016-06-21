/// <reference path="character.ts" />

/**
 * Enemy
 */
class Enemy extends Character {
    private posX: number;
    private posY: number;
    private speed: number;
    public name: string;
    private width: number;
    private height: number;

    constructor(l: Level, w: number, h: number) {
        super(l, "enemy");

        let random = Math.round(Math.random() * 24);
        this.name = l.enemyNames[random];
        this.div.innerHTML = this.name;

        this.width = w;
        this.height = h;

        this.posX = -this.width;
        this.posY = (Math.random() * (window.innerHeight / 2 - this.height)) + 50;
        this.speed = Math.round(Math.random() * 3 +1);
    }

    public remove(index: number):void {
        this.level.enemies.splice(index, 1);
        this.div.remove();
    }

    public draw():void {
        this.posX += this.speed;

        if(this.posX > window.innerWidth) {
            let i = this.level.enemies.indexOf(this);
            this.remove(i);
            if(this.level.bonesCount > 0) {
                this.level.bonesCount--;
            }
        }

        this.div.style.transform = "translate(" + this.posX + "px, " + this.posY + "px)";
    }
}