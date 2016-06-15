/**
 * Level
 * Parent class for all levels
 */
class Level {
    
    public div: HTMLElement;
    private dog: Dog;
    
    constructor(stage : number) {
        this.div = document.createElement("level");
        this.div.id = "level" + stage;
        document.body.appendChild(this.div);

        this.dog = new Dog(this);
    }

    public update() {
        this.dog.move();
    }
}