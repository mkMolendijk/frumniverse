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

    constructor(l: Level) {
        super(l, "enemy");

        let random = Math.round(Math.random() * 24);
        this.name = l.enemyNames[random];
        this.div.innerHTML = this.name;

        this.width = 128;
        this.height = 99;

        this.posX = -this.width;
        this.posY = (Math.random() * (window.innerHeight / 2 - this.height)) + 50;
        this.speed = Math.round(Math.random() * 3 +1);
    }

    public remove():void {
        this.div.remove();
    }

    public draw():void {
        this.posX += this.speed;

        if(this.posX > window.innerWidth) {
            this.div.remove();
        }

        this.div.style.transform = "translate(" + this.posX + "px, " + this.posY + "px)";
    }
}