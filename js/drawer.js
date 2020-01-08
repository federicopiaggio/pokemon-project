
var gameStates = {
    enemyPoke : 1,
    playerPoke : 2
}


var vineWhip = new Attack ("Vine Whip", 100 , 20, "Plant");
var tackle = new Attack ("Tackle", 85, 25, "Normal");
var razorLeaf = new Attack ("Razor Leaf", 105, 10, "Plant");
var solarBeam = new Attack ("Solar Beam", 120 , 5, "Plant");

var ember = new Attack ("Ember", 20, 20, "Fire");
var scratch = new Attack ("Scratch", 10, 25, "Normal");
var flamethrower = new Attack ("Flamethrower", 35, 20, "Fire");
var fireSpin = new Attack ("Fire Spin", 45, 5, "Fire");

var bubble = new Attack ("Bubble", 95, 20, "Water");
var rainSplash = new Attack ("Rain Splash", 110, 25, "Water");
var waterGun = new Attack ("Water Gun", 115, 20, "Water");


var charmander = new Pokemon ("Charmander", 45, "Fire" , 1, [ember, scratch,flamethrower,fireSpin], 50);
var squirtle = new Pokemon ("Squirtle", 40, "Water" , 1, [bubble,rainSplash,waterGun,tackle], 70);
var bulbasaur = new Pokemon ("Bulbasaur", 40 , "Plant", 1, [vineWhip,tackle,razorLeaf,solarBeam], 80);

<<<<<<< HEAD
var playerPoke = charmander;
var enemyPoke = squirtle;
=======
var objPoke = {
    0: {
        "name" : "Charmander",
        "life" : 105,
        "type" : "Fire",
        "level" : 1,
        "attacks" : [ember, scratch,flamethrower,fireSpin],
        "defense" : 65,
    },

    1: {
        "name" : "Squirtle",
        "life" : 100,
        "type" : "Water",
        "level" : 1,
        "attacks" : [bubble,rainSplash,waterGun,tackle],
        "defense" : 75,
    },

    2: {
        "name" : "Bulbasaur",
        "life" : 95,
        "type" : "Plant",
        "level" : 1,
        "attacks" : [vineWhip,tackle,razorLeaf,solarBeam],
        "defense" : 75,
    },
}

function GetRandomInt(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
} 

function selector(player = 0){
    let e = GetRandomInt(0, Object.keys(objPoke).length - 1);
    gameStates.enemyPoke = new Pokemon (objPoke[e].name,objPoke[e].life,objPoke[e].type,objPoke[e].level,objPoke[e].attacks,objPoke[e].defense);
    gameStates.playerPoke = new Pokemon (objPoke[player].name,objPoke[player].life,objPoke[player].type,objPoke[player].level,objPoke[player].attacks,objPoke[player].defense);
}

selector(2)

console.log(gameStates.playerPoke,gameStates.enemyPoke);


var attack1 = gameStates.playerPoke.attack(gameStates.enemyPoke, gameStates.playerPoke.attacks[0].damage);
/* var attack2 = playerPoke.attack(gameStates.enemyPoke, gameStates.playerPoke[1].damage);
var attack3 = playerPoke.attack(gameStates.enemyPoke, gameStates.playerPoke[2].damage);
var attack4 = playerPoke.attack(gameStates.enemyPoke, gameStates.playerPoke[3].damage);
 */

>>>>>>> 2bef6c1662b2d3a8a4a2bac91d8846927b883cc8


playerPoke.attack(enemyPoke, 100);

enemyPoke.attack(playerPoke, 100);




