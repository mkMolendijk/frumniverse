/**
 * Character
 * Parent class for the characters
 */
class Character {
    protected level: Level;
    protected div: HTMLElement;
    
    constructor(l: Level, tagName: string) {
        this.level = l;

        this.div = document.createElement(tagName);
        this.level.div.appendChild(this.div);
    }
}