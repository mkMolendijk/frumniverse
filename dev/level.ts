/**
 * level
 */
class Level {
    
    private div;
    private platform : HTMLElement;
    
    constructor(stage : number) {
        this.div = document.createElement("level");
        this.div.id = "level" + stage;
        document.body.appendChild(this.div);
    }
}