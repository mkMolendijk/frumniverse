/**
 * level
 */
class Level {
    
    private div;
    private platform : HTMLElement;
    private ghost : Ghost;
    
    constructor(stage : number) {
        this.div = document.createElement("level");
        this.div.id = stage;
        document.body.appendChild(this.div);
        
        this.ghost = new Ghost();
    }
}