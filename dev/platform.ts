/// <reference path="level.ts" />

/**
 * Platform
 */
class Platform {
    public div: HTMLElement;
    private level: Level;
    
    public posX: number;
    public posY: number;
    public width: number;
    public height: number;
    
    constructor(l: Level, stage: number) {
        this.level = l;
        
        this.div = document.createElement("platform" + stage);
        this.level.div.appendChild(this.div);
    }

    public draw() {
        this.div.style.transform = "translate(" + this.posX + "px, " + this.posY + "px)";
    }
}