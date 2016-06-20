/// <reference path="level.ts" />
/// <reference path="platform.ts" />
/// <reference path="character.ts" />


/**
 * Dog
 */
class Dog extends Character {
    
    private posX : number;
    private posY : number;
    private width : number;
    private height: number;
    
    private speedX : number = 0;
    private speedY : number = 0;
    private scale : number = 1;

    private platform : any;
    
    constructor(l: Level, p: any) {
        super(l, "dog");

        this.platform = p;

        this.width = 66;
        this.height = 59;
        this.posX = this.platform.posX + this.platform.width / 2 - this.width / 2;
        this.posY = this.platform.posY - this.height + 10;
        
        //Add keyboard listeners
        window.addEventListener("keydown", this.onKeyDown.bind(this));
        window.addEventListener("keyup", this.onKeyUp.bind(this));
    }
    
    private onKeyDown(event : KeyboardEvent) : void {
        switch(event.keyCode) {
            case 37:
                this.speedX = -5;
                this.scale = -1;
                break;
            case 39:
                this.speedX = 5;
                this.scale = 1;
                break;
        }
    }
    
    private onKeyUp(event : KeyboardEvent) : void {
        switch(event.keyCode) {
            case 37:
                this.speedX = 0;
                break;
            case 39:
                this.speedX = 0;
                break;
        }
    }
    
    public move() : void {
        if (this.posX + this.speedX < this.platform.posX) {
            this.posX = this.platform.posX;
        } else if (this.posX + this.speedX > this.platform.posX + this.platform.width - this.width) {
            this.posX = this.platform.posX + this.platform.width - this.width;
        } else {
            this.posX += this.speedX;
        }        
        
        this.div.style.transform = "translate(" + this.posX + "px, " + this.posY + "px) scaleX(" + this.scale + ")";
    }
}