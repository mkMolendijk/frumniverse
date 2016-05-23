/**
 * ghost
 */
class Ghost {
    
    private divGhost : HTMLElement;
    
    private posX : number;
    private posY : number;
    
    private speedX : number = 0;
    private speedY : number = 0;
    
    constructor() {
        this.divGhost = document.createElement("ghost");
        document.body.appendChild(this.divGhost);
        
        this.posX = Math.random() * (window.innerWidth - 100);
        this.posY = Math.random() * (window.innerHeight - 100);
        
        //Add keyboard listeners
        window.addEventListener("keydown", this.onKeyDown.bind(this));
        window.addEventListener("keyup", this.onKeyUp.bind(this));
    }
    
    private onKeyDown(event : KeyboardEvent) : void {
        switch(event.keyCode) {
            case 37:
                this.speedX = -5;
                break;
            case 38:
                this.speedY = -5;
                break;
            case 39:
                this.speedX = 5;
                break;
            case 40:
                this.speedY = 5;
                break;
        }
    }
    
    private onKeyUp(event : KeyboardEvent) : void {
        switch(event.keyCode) {
            case 37:
                this.speedX = 0;
                break;
            case 38:
                this.speedY = 0;
                break;
            case 39:
                this.speedX = 0;
                break;
            case 40:
                this.speedY = 0;
                break;
        }
    }
    
    public move() : void {
        if (this.posX + this.speedX < 0) {
            this.posX = 0;
        } else if (this.posX + this.speedX > window.innerWidth - 100) {
            this.posX = window.innerWidth - 100;
        } else {
            this.posX += this.speedX;
        }
        
        if (this.posY + this.speedY < 0) {
            this.posY = 0;
        } else if (this.posY + this.speedY > window.innerHeight - 100) {
            this.posY = window.innerHeight - 100;
        } else {
            this.posY += this.speedY;
        }
        
        this.divGhost.style.transform = "translate(" + this.posX + "px, " + this.posY + "px)";
    }
}