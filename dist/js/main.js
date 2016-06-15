var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Character = (function () {
    function Character(l, tagName) {
        this.level = l;
        this.div = document.createElement(tagName);
        this.level.div.appendChild(this.div);
    }
    return Character;
}());
var Dog = (function (_super) {
    __extends(Dog, _super);
    function Dog(l) {
        _super.call(this, l, "dog");
        this.speedX = 0;
        this.speedY = 0;
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
        this.div.style.transform = "translate(" + this.posX + "px, " + this.posY + "px)";
    };
    return Dog;
}(Character));
var Level = (function () {
    function Level(stage) {
        this.div = document.createElement("level");
        this.div.id = "level" + stage;
        document.body.appendChild(this.div);
        this.dog = new Dog(this);
    }
    Level.prototype.update = function () {
        this.dog.move();
    };
    return Level;
}());
var Game = (function () {
    function Game() {
        this.level = new Level(1);
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    Game.prototype.gameLoop = function () {
        this.level.update();
        requestAnimationFrame(this.gameLoop.bind(this));
    };
    return Game;
}());
var Ghost = (function (_super) {
    __extends(Ghost, _super);
    function Ghost(l) {
        _super.call(this, l, "ghost");
        this.speedX = 0;
        this.speedY = 0;
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
}(Character));
var Item = (function () {
    function Item() {
    }
    return Item;
}());
window.addEventListener("load", function () {
    new Game();
});
var LevelFive = (function (_super) {
    __extends(LevelFive, _super);
    function LevelFive(stage) {
        _super.call(this, stage);
    }
    return LevelFive;
}(Level));
var LevelFour = (function (_super) {
    __extends(LevelFour, _super);
    function LevelFour(stage) {
        _super.call(this, stage);
    }
    return LevelFour;
}(Level));
var LevelOne = (function (_super) {
    __extends(LevelOne, _super);
    function LevelOne(stage) {
        _super.call(this, stage);
    }
    return LevelOne;
}(Level));
var LevelThree = (function (_super) {
    __extends(LevelThree, _super);
    function LevelThree(stage) {
        _super.call(this, stage);
    }
    return LevelThree;
}(Level));
var LevelTwo = (function (_super) {
    __extends(LevelTwo, _super);
    function LevelTwo(stage) {
        _super.call(this, stage);
    }
    return LevelTwo;
}(Level));
//# sourceMappingURL=main.js.map