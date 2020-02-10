

//------------INDEX SOLO PARA INSTANCIAR-------------


// Objeto para instanciar y separar ambos pokemones

var gameStates = {
    enemyPoke : 1,
    playerPoke : 2
}

//Instanciado de los ataques

var vineWhip = new Attack ("Vine Whip", 90, 1, "Plant", true);
var tackle = new Attack ("Tackle", 95, 3, "Normal", true);
var razorLeaf = new Attack ("Razor Leaf", 95, 1, "Plant", true);
var solarBeam = new Attack ("Solar Beam", 105 , 1, "Plant", true);

var ember = new Attack ("Ember", 95, 1, "Fire", true);
var scratch = new Attack ("Scratch", 95, 3, "Normal", true);
var flamethrower = new Attack ("Flamethrower", 100, 1, "Fire", true);
var fireSpin = new Attack ("Fire Spin", 110, 1, "Fire", true);

var bubble = new Attack ("Bubble", 95, 1, "Water", true);
var rainSplash = new Attack ("Rain Splash", 100, 1, "Water", true);
var waterGun = new Attack ("Water Gun", 110, 1, "Water", true);






//ObjPoke es un obj literal / arrays de pokemones
    



function instancePoke(e, select){
    gameStates.enemyPoke = new Pokemon (objPoke[e].name,objPoke[e].life,objPoke[e].type,objPoke[e].level,objPoke[e].attacks,objPoke[e].defense);
    gameStates.playerPoke = new Pokemon (objPoke[select].name,objPoke[select].life,objPoke[select].type,objPoke[select].level,objPoke[select].attacks,objPoke[select].defense);
    console.log(gameStates.playerPoke);
    console.log(gameStates.enemyPoke);
}



var objPoke = [
    {
        "name" : "Charmander",
        "life" : 105,
        "type" : "Fire",
        "level" : 1,
        "attacks" : [scratch,ember,flamethrower,fireSpin],
        "defense" : 70,
    },

    {
        "name" : "Squirtle",
        "life" : 100,
        "type" : "Water",
        "level" : 1,
        "attacks" : [tackle,bubble,rainSplash,waterGun],
        "defense" : 75,
    },

    {
        "name" : "Bulbasaur",
        "life" : 95,
        "type" : "Plant",
        "level" : 1,
        "attacks" : [tackle,vineWhip,razorLeaf,solarBeam],
        "defense" : 80,
    },
]


var btnAttack = [];
var btnPoke = [];




/* var charmander = new Pokemon ("Charmander", 105, "Fire", 1 , [scratch,ember,flamethrower,fireSpin], 70);
var squirtle = new Pokemon ("Squirtle", 100, "Water", 1 , [tackle,bubble,rainSplash,waterGun], 75);
var bulbasaur = new Pokemon ("Bulbasaur", 95, "Plant", 1 , [tackle,vineWhip,razorLeaf,solarBeam], 80);


var pokeArray = [
    charmander,
    squirtle,
    bulbasaur
];


// Instancia de los Pokemones a través de la función selector que esta en aplication

function instancePoke(e, select){
    var enemyPoke = pokeArray[select];
    var playerPoke = enemyPoke[e];
    console.log(playerPoke);
    console.log(enemyPoke);
} */
