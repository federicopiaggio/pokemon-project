

//------------INDEX SOLO PARA INSTANCIAR-------------


// Objeto para instanciar y separar ambos pokemones

var gameStates = {
    enemyPoke : 1,
    playerPoke : 2
}

//Instanciado de los ataques

var vineWhip = new Attack ("Vine Whip", 100 , 20, "Plant");
var tackle = new Attack ("Tackle", 85, 25, "Normal");
var razorLeaf = new Attack ("Razor Leaf", 105, 10, "Plant");
var solarBeam = new Attack ("Solar Beam", 120 , 5, "Plant");

var ember = new Attack ("Ember", 105, 20, "Fire");
var scratch = new Attack ("Scratch", 80, 25, "Normal");
var flamethrower = new Attack ("Flamethrower", 110, 20, "Fire");
var fireSpin = new Attack ("Fire Spin", 120, 5, "Fire");

var bubble = new Attack ("Bubble", 95, 20, "Water");
var rainSplash = new Attack ("Rain Splash", 110, 25, "Water");
var waterGun = new Attack ("Water Gun", 115, 20, "Water");

// Instancia de los Pokemones a través de la función selector que esta en aplication

function instancePoke(e, select){
    gameStates.enemyPoke = new Pokemon (objPoke[e].name,objPoke[e].life,objPoke[e].type,objPoke[e].level,objPoke[e].attacks,objPoke[e].defense);
    gameStates.playerPoke = new Pokemon (objPoke[select].name,objPoke[select].life,objPoke[select].type,objPoke[select].level,objPoke[select].attacks,objPoke[select].defense);
    console.log(gameStates.playerPoke);
    console.log(gameStates.enemyPoke);
}



//ObjPoke es un obj literal / arrays de pokemones

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

//OPCION DE INSTANCIA PERO SIN RANDOM 

/* var charmander = new Pokemon ("Charmander", 105, "Fire", 1 , [ember,scratch,flamethrower,fireSpin], 70);
var squirtle = new Pokemon ("Squirtle", 100, "Water", 1 , [bubble,tackle,waterGun,rainSplash], 75);
var bulbasaur = new Pokemon ("Bulbasaur", 95, "Plant", 1 , [vineWhip,tackle,razorLeaf,solarBeam], 80); */


//PRUEBA DE COSAS


/* gameStates.playerPoke.attack(gameStates.enemyPoke, 100);
gameStates.enemyPoke.attack(gameStates.playerPoke, 100); */


