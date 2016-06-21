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
    function Enemy(l, w, h) {
        _super.call(this, l, "enemy");
        var random = Math.round(Math.random() * 24);
        this.name = l.enemyNames[random];
        this.div.innerHTML = this.name;
        this.width = w;
        this.height = h;
        this.posX = -this.width;
        this.posY = (Math.random() * (window.innerHeight / 2 - this.height)) + 50;
        this.speed = Math.round(Math.random() * 3 + 1);
    }
    Enemy.prototype.remove = function (index) {
        this.level.enemies.splice(index, 1);
        this.div.remove();
    };
    Enemy.prototype.draw = function () {
        this.posX += this.speed;
        if (this.posX > window.innerWidth) {
            var i = this.level.enemies.indexOf(this);
            this.remove(i);
            if (this.level.bonesCount > 0) {
                this.level.bonesCount--;
            }
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
        this.header = document.createElement("header");
        this.div.appendChild(this.header);
        this.scoreDiv = document.createElement("bones");
        this.header.appendChild(this.scoreDiv);
        this.bonesCount = 0;
        this.scoreDiv.innerHTML = "" + this.bonesCount;
        this.goldBones = document.createElement("gold-bones");
        this.header.appendChild(this.goldBones);
        this.goldBonesCount = stage - 1;
        this.goldBones.innerHTML = "" + this.goldBonesCount;
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
                    this.bonesCount++;
                    this.enemies[i].remove(i);
                    if (this.bonesCount == 10) {
                        this.goldBonesCount++;
                    }
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
        this.scoreDiv.innerHTML = "" + this.bonesCount;
        this.goldBones.innerHTML = "" + this.goldBonesCount;
    };
    Level.prototype.remove = function () {
        this.div.remove();
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
        this.timer = setInterval(this.createEnemy.bind(this), 2000);
    }
    LevelOne.prototype.createEnemy = function () {
        this.enemies.push(new Enemy(this, 128, 99));
    };
    LevelOne.prototype.remove = function () {
        clearInterval(this.timer);
        _super.prototype.remove.call(this);
    };
    return LevelOne;
}(Level));
var Game = (function () {
    function Game() {
        this.level = new LevelFive();
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    Game.prototype.gameLoop = function () {
        this.level.update();
        this.nextLevel();
        requestAnimationFrame(this.gameLoop.bind(this));
    };
    Game.prototype.nextLevel = function () {
        if (this.level.bonesCount == 10) {
            if (this.level.goldBonesCount == 1) {
                this.level.remove();
                this.level = new LevelTwo();
            }
            else if (this.level.goldBonesCount == 2) {
                this.level.remove();
                this.level = new LevelThree();
            }
            else if (this.level.goldBonesCount == 3) {
                this.level.remove();
                this.level = new LevelFour();
            }
            else if (this.level.goldBonesCount == 4) {
                this.level.remove();
                this.level = new LevelFive();
            }
        }
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
    function LevelFive() {
        _super.call(this, 5);
        this.enemyNames = ["aardbei", "bananen", "cijfers", "dwergje", "egeltje", "frisbee", "griezel", "hoepels", "ijsbeer", "januari", "kristal", "lerares", "musical", "neefjes",
            "oceanen", "plezier", "rappers", "rondjes", "snoepen", "toeters", "uitgang", "voetbal", "website", "yoghurt", "zwemmen"];
        this.platform = new Platform(this, 5);
        this.platform.width = 505;
        this.platform.height = 195;
        this.platform.posX = (window.innerWidth - this.platform.width) / 2;
        this.platform.posY = (window.innerHeight - (this.platform.height + 100));
        this.enemySize = 7;
        this.platform.draw();
        this.rock = new Platform(this, 51);
        this.rock.width = 422;
        this.rock.height = 195;
        this.rock.posX = this.platform.posX + this.platform.width / 2 - this.rock.width / 2;
        this.rock.posY = this.platform.posY - this.rock.height;
        this.rock.draw();
        this.castle = new Platform(this, 52);
        this.castle.width = 68;
        this.castle.height = 71;
        this.castle.posX = this.rock.posX + this.rock.width / 2 - this.castle.width / 2;
        this.castle.posY = this.platform.posY - this.castle.height;
        this.castle.draw();
        this.dog = new Dog(this, this.platform);
        this.timer = setInterval(this.createEnemy.bind(this), 2000);
    }
    LevelFive.prototype.createEnemy = function () {
        this.enemies.push(new Enemy(this, 280, 350));
    };
    LevelFive.prototype.remove = function () {
        clearInterval(this.timer);
        _super.prototype.remove.call(this);
    };
    return LevelFive;
}(Level));
var LevelFour = (function (_super) {
    __extends(LevelFour, _super);
    function LevelFour() {
        _super.call(this, 4);
        this.enemyNames = ["ankers", "bessen", "cowboy", "douche", "ekster", "filmen", "gevaar", "heksen", "ijsjes", "jeetje", "keuken", "lusten", "mazzel", "najaar",
            "oranje", "punten", "quotes", "reuzen", "schaap", "tempel", "uurtje", "vijver", "windje", "zinken", "zwaard"];
        this.platform = new Platform(this, 4);
        this.platform.width = 217;
        this.platform.height = 182;
        this.platform.posX = (window.innerWidth - this.platform.width) / 2;
        this.platform.posY = (window.innerHeight - (this.platform.height + 100));
        this.enemySize = 6;
        this.platform.draw();
        this.rock = new Platform(this, 42);
        this.rock.width = 467;
        this.rock.height = 315;
        this.rock.posX = this.platform.posX + 575;
        this.rock.posY = this.platform.posY - this.rock.height;
        this.rock.draw();
        this.dog = new Dog(this, this.platform);
        this.timer = setInterval(this.createEnemy.bind(this), 2000);
    }
    LevelFour.prototype.createEnemy = function () {
        this.enemies.push(new Enemy(this, 196, 221));
    };
    LevelFour.prototype.remove = function () {
        clearInterval(this.timer);
        _super.prototype.remove.call(this);
    };
    return LevelFour;
}(Level));
var LevelThree = (function (_super) {
    __extends(LevelThree, _super);
    function LevelThree() {
        _super.call(this, 3);
        this.enemyNames = ["aapje", "baard", "cavia", "druif", "elfje", "fluit", "geest", "hemel", "ijsje", "jagen", "klein", "lucht", "mesje", "nieuw",
            "ouder", "paard", "kwark", "ritje", "steen", "teken", "uilen", "visje", "weten", "zebra", "zwaai"];
        this.platform = new Platform(this, 3);
        this.platform.width = window.innerWidth;
        this.platform.height = 1;
        this.platform.posX = 0;
        this.platform.posY = window.innerHeight - 10;
        this.platform.draw();
        this.door = new Platform(this, 31);
        this.door.width = 68;
        this.door.height = 71;
        this.door.posX = (window.innerWidth - this.door.width) / 2;
        this.door.posY = window.innerHeight - this.door.height;
        this.enemySize = 5;
        this.door.draw();
        this.dog = new Dog(this, this.platform);
        this.timer = setInterval(this.createEnemy.bind(this), 2000);
    }
    LevelThree.prototype.createEnemy = function () {
        this.enemies.push(new Enemy(this, 130, 110));
    };
    LevelThree.prototype.remove = function () {
        clearInterval(this.timer);
        _super.prototype.remove.call(this);
    };
    return LevelThree;
}(Level));
var LevelTwo = (function (_super) {
    __extends(LevelTwo, _super);
    function LevelTwo() {
        _super.call(this, 2);
        this.enemyNames = ["acht", "boor", "cent", "duif", "egel", "fles", "goud", "hond", "iets", "jurk", "kamp", "leuk", "melk", "noot",
            "oost", "pech", "quiz", "raar", "snot", "tuin", "unie", "vlam", "wijs", "yoga", "zeur"];
        this.platform = new Platform(this, 2);
        this.platform.width = 1129;
        this.platform.height = 48;
        this.platform.posX = (window.innerWidth - this.platform.width) / 2;
        this.platform.posY = (window.innerHeight - (this.platform.height + 100));
        this.enemySize = 4;
        this.platform.draw();
        this.hill = new Platform(this, 21);
        this.hill.width = 554;
        this.hill.height = 164;
        this.hill.posX = this.platform.posX + 575;
        this.hill.posY = this.platform.posY - this.hill.height;
        this.hill.draw();
        this.house = new Platform(this, 22);
        this.house.width = 166;
        this.house.height = 142;
        this.house.posX = this.hill.posX + 85;
        this.house.posY = this.hill.posY - this.house.height;
        this.house.draw();
        this.tree = new Platform(this, 23);
        this.tree.width = 181;
        this.tree.height = 435;
        this.tree.posX = this.platform.posX + 85;
        this.tree.posY = this.platform.posY - this.tree.height;
        this.tree.draw();
        this.dog = new Dog(this, this.platform);
        this.timer = setInterval(this.createEnemy.bind(this), 2000);
    }
    LevelTwo.prototype.createEnemy = function () {
        this.enemies.push(new Enemy(this, 210, 157));
    };
    LevelTwo.prototype.remove = function () {
        clearInterval(this.timer);
        _super.prototype.remove.call(this);
    };
    return LevelTwo;
}(Level));
//# sourceMappingURL=main.js.map