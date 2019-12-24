



var vineWhip = new Attack ("Vine Whip", 20 , 20, "Plant");
var tackle = new Attack ("Tackle", 15, 25, "Normal");
var razorLeaf = new Attack ("Razor Leaf", 30, 10, "Plant");
var solarBeam = new Attack ("Solar Beam", 40 , 5, "Plant");

var ember = new Attack ("Ember", 90, 20, "Fire");
var scratch = new Attack ("Scratch", 80, 25, "Normal");
var flamethrower = new Attack ("Flamethrower", 105, 10, "Fire");
var fireSpin = new Attack ("Fire Spin", 115, 5, "Fire");

var bubble = new Attack ("Bubble", 25, 20, "Water");
var rainSplash = new Attack ("Rain Splash", 30, 25, "Water");
var waterGun = new Attack ("Water Gun", 40, 20, "Water");



var objPoke = {
    0: {
        "name" : "Charmander",
        "life" : 55,
        "type" : "Fire",
        "level" : 1,
        "attacks" : [ember, scratch,flamethrower,fireSpin],
        "defense" : 65,
    },

    1: {
        "name" : "Squirtle",
        "life" : 50,
        "type" : "Water",
        "level" : 1,
        "attacks" : [bubble,rainSplash,waterGun,tackle],
        "defense" : 75,
    },

    2: {
        "name" : "Bulbasaur",
        "life" : 45,
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

var enemyPoke, playerPoke;

function selector(player = 0){
let e = GetRandomInt(0,2);
enemyPoke = new Pokemon (objPoke[e].name,objPoke[e].life,objPoke[e].type,objPoke[e].level,objPoke[e].attacks,objPoke[e].defense);
playerPoke = new Pokemon (objPoke[player].name,objPoke[player].life,objPoke[player].type,objPoke[player].level,objPoke[player].attacks,objPoke[player].defense);

}

selector(1)

console.log(playerPoke,enemyPoke);


var attack1 = playerPoke.attack(enemyPoke, playerPoke.attacks[0].damage);
/* var attack2 = playerPoke.attack(enemyPoke, playerPoke.attacks[1].damage);
var attack3 = playerPoke.attack(enemyPoke, playerPoke.attacks[2].damage);
var attack4 = playerPoke.attack(enemyPoke, playerPoke.attacks[3].damage);
 */








