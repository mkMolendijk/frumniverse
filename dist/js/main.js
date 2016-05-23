var Dog = (function () {
    function Dog() {
        this.speedX = 0;
        this.speedY = 0;
        this.divDog = document.createElement("dog");
        document.body.appendChild(this.divDog);
        this.posX = Math.random() * (window.innerWidth - 100);
        this.posY = Math.random() * (window.innerHeight - 100);
        window.addEventListener("keydown", this.onKeyDown.bind(this));
        window.addEventListener("keyup", this.onKeyUp.bind(this));
    }
    Dog.prototype.onKeyDown = function (event) {
        switch (event.keyCode) {
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
    };
    Dog.prototype.onKeyUp = function (event) {
        switch (event.keyCode) {
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
    };
    Dog.prototype.move = function () {
        if (this.posX + this.speedX < 0) {
            this.posX = 0;
        }
        else if (this.posX + this.speedX > window.innerWidth - 100) {
            this.posX = window.innerWidth - 100;
        }
        else {
            this.posX += this.speedX;
        }
        if (this.posY + this.speedY < 0) {
            this.posY = 0;
        }
        else if (this.posY + this.speedY > window.innerHeight - 100) {
            this.posY = window.innerHeight - 100;
        }
        else {
            this.posY += this.speedY;
        }
        this.divDog.style.transform = "translate(" + this.posX + "px, " + this.posY + "px)";
    };
    return Dog;
}());
var Level = (function () {
    function Level(stage) {
        this.div = document.createElement("level");
        this.div.id = "level" + stage;
        document.body.appendChild(this.div);
    }
    return Level;
}());
var Ghost = (function () {
    function Ghost() {
        this.speedX = 0;
        this.speedY = 0;
        this.divGhost = document.createElement("ghost");
        document.body.appendChild(this.divGhost);
        this.posX = Math.random() * (window.innerWidth - 100);
        this.posY = Math.random() * (window.innerHeight - 100);
        window.addEventListener("keydown", this.onKeyDown.bind(this));
        window.addEventListener("keyup", this.onKeyUp.bind(this));
    }
    Ghost.prototype.onKeyDown = function (event) {
        switch (event.keyCode) {
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
    };
    Ghost.prototype.onKeyUp = function (event) {
        switch (event.keyCode) {
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
    };
    Ghost.prototype.move = function () {
        if (this.posX + this.speedX < 0) {
            this.posX = 0;
        }
        else if (this.posX + this.speedX > window.innerWidth - 100) {
            this.posX = window.innerWidth - 100;
        }
        else {
            this.posX += this.speedX;
        }
        if (this.posY + this.speedY < 0) {
            this.posY = 0;
        }
        else if (this.posY + this.speedY > window.innerHeight - 100) {
            this.posY = window.innerHeight - 100;
        }
        else {
            this.posY += this.speedY;
        }
        this.divGhost.style.transform = "translate(" + this.posX + "px, " + this.posY + "px)";
    };
    return Ghost;
}());
var Game = (function () {
    function Game() {
        this.level = new Level(1);
        this.dog = new Dog();
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    Game.prototype.gameLoop = function () {
        this.dog.move();
        requestAnimationFrame(this.gameLoop.bind(this));
    };
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
//# sourceMappingURL=main.js.map