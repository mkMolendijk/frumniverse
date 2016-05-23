/**
 * ghost
 */
class Ghost {
    
    private divGhost : HTMLElement;
    
    constructor() {
        this.divGhost = document.createElement("ghost");
        document.body.appendChild(this.divGhost);
    }
}