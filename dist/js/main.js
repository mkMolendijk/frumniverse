var Dog = (function () {
    function Dog() {
    }
    return Dog;
}());
var Game = (function () {
    function Game() {
        this.level = new Level(1);
    }
    return Game;
}());
var Ghost = (function () {
    function Ghost() {
        this.divGhost = document.createElement("ghost");
        document.body.appendChild(this.divGhost);
    }
    return Ghost;
}());
var Level = (function () {
    function Level(stage) {
        this.div = document.createElement("level");
        this.div.id = stage;
        document.body.appendChild(this.div);
        this.ghost = new Ghost();
    }
    return Level;
}());
window.addEventListener("load", function () {
    new Game();
});
//# sourceMappingURL=main.js.map