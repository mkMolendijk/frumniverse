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
var Platform = (function () {
    function Platform(l, stage) {
        this.level = l;
        this.div = document.createElement("platform" + stage);
        this.level.div.appendChild(this.div);
    }
    Platform.prototype.draw = function () {
        this.div.style.transform = "translate(" + this.posX + "px, " + this.posY + "px)";
    };
    return Platform;
}());
var Enemy = (function (_super) {
    __extends(Enemy, _super);
    function Enemy(l) {
        _super.call(this, l, "enemy");
        var random = Math.round(Math.random() * 25);
        this.name = l.enemyNames[random];
        this.div.innerHTML = this.name;
        this.width = 128;
        this.height = 99;
        this.posX = -this.width;
        this.posY = Math.random() * (window.innerWidth / 2 - this.height);
        this.speed = Math.round(Math.random() * 4);
    }
    Enemy.prototype.remove = function () {
        this.div.remove();
    };
    Enemy.prototype.draw = function () {
        this.posX += this.speed;
        if (this.posX > window.innerWidth) {
            this.div.remove();
        }
        this.div.style.transform = "translate(" + this.posX + "px, " + this.posY + "px)";
    };
    return Enemy;
}(Character));
var Level = (function () {
    function Level(stage) {
        this.lettersTyped = "";
        this.div = document.createElement("level");
        this.div.id = "level" + stage;
        document.body.appendChild(this.div);
        this.enemies = new Array();
        window.addEventListener("keydown", this.onKeyDown.bind(this));
    }
    Level.prototype.onKeyDown = function (event) {
        switch (event.keyCode) {
            case 65:
                this.lettersTyped += 'a';
                break;
            case 66:
                this.lettersTyped += 'b';
                break;
            case 67:
                this.lettersTyped += 'c';
                break;
            case 68:
                this.lettersTyped += 'd';
                break;
            case 69:
                this.lettersTyped += 'e';
                break;
            case 70:
                this.lettersTyped += 'f';
                break;
            case 71:
                this.lettersTyped += 'g';
                break;
            case 72:
                this.lettersTyped += 'h';
                break;
            case 73:
                this.lettersTyped += 'i';
                break;
            case 74:
                this.lettersTyped += 'j';
                break;
            case 75:
                this.lettersTyped += 'k';
                break;
            case 76:
                this.lettersTyped += 'l';
                break;
            case 77:
                this.lettersTyped += 'm';
                break;
            case 78:
                this.lettersTyped += 'n';
                break;
            case 79:
                this.lettersTyped += 'o';
                break;
            case 80:
                this.lettersTyped += 'p';
                break;
            case 81:
                this.lettersTyped += 'q';
                break;
            case 82:
                this.lettersTyped += 'r';
                break;
            case 83:
                this.lettersTyped += 's';
                break;
            case 84:
                this.lettersTyped += 't';
                break;
            case 85:
                this.lettersTyped += 'u';
                break;
            case 86:
                this.lettersTyped += 'v';
                break;
            case 87:
                this.lettersTyped += 'w';
                break;
            case 88:
                this.lettersTyped += 'x';
                break;
            case 89:
                this.lettersTyped += 'y';
                break;
            case 90:
                this.lettersTyped += 'z';
                break;
        }
    };
    Level.prototype.checkEnemies = function () {
        if (this.lettersTyped.length == this.enemySize) {
            for (var i = 0; i < this.enemies.length; i++) {
                if (this.lettersTyped == this.enemies[i].name) {
                    this.enemies[i].remove();
                }
            }
            this.lettersTyped = "";
        }
    };
    Level.prototype.update = function () {
        this.dog.move();
        for (var i = 0; i < this.enemies.length; i++) {
            this.enemies[i].draw();
        }
        this.checkEnemies();
    };
    return Level;
}());
var Dog = (function (_super) {
    __extends(Dog, _super);
    function Dog(l, p) {
        _super.call(this, l, "dog");
        this.speedX = 0;
        this.speedY = 0;
        this.scale = 1;
        this.platform = p;
        this.width = 66;
        this.height = 59;
        this.posX = this.platform.posX + this.platform.width / 2 - this.width / 2;
        this.posY = this.platform.posY - this.height + 10;
        window.addEventListener("keydown", this.onKeyDown.bind(this));
        window.addEventListener("keyup", this.onKeyUp.bind(this));
    }
    Dog.prototype.onKeyDown = function (event) {
        switch (event.keyCode) {
            case 37:
                this.speedX = -5;
                this.scale = -1;
                break;
            case 39:
                this.speedX = 5;
                this.scale = 1;
                break;
        }
    };
    Dog.prototype.onKeyUp = function (event) {
        switch (event.keyCode) {
            case 37:
                this.speedX = 0;
                break;
            case 39:
                this.speedX = 0;
                break;
        }
    };
    Dog.prototype.move = function () {
        if (this.posX + this.speedX < this.platform.posX) {
            this.posX = this.platform.posX;
        }
        else if (this.posX + this.speedX > this.platform.posX + this.platform.width - this.width) {
            this.posX = this.platform.posX + this.platform.width - this.width;
        }
        else {
            this.posX += this.speedX;
        }
        this.div.style.transform = "translate(" + this.posX + "px, " + this.posY + "px) scaleX(" + this.scale + ")";
    };
    return Dog;
}(Character));
var LevelOne = (function (_super) {
    __extends(LevelOne, _super);
    function LevelOne() {
        _super.call(this, 1);
        this.enemyNames = ["aap", "bel", "cel", "dop", "eer", "fax", "gek", "hap", "ijs", "jas", "kip", "los", "mat", "nek",
            "oma", "pop", "qua", "rib", "sla", "tip", "ufo", "vet", "wel", "yes", "zit"];
        this.platform = new Platform(this, 1);
        this.platform.width = 516;
        this.platform.height = 169;
        this.platform.posX = (window.innerWidth - this.platform.width) / 2;
        this.platform.posY = (window.innerHeight - (this.platform.height + 100));
        this.enemySize = 3;
        this.platform.draw();
        this.dog = new Dog(this, this.platform);
        this.enemies.push(new Enemy(this));
    }
    return LevelOne;
}(Level));
var Game = (function () {
    function Game() {
        this.level = new LevelOne();
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