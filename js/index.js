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

var ember = new Attack ("Ember", 20, 20, "Fire");
var scratch = new Attack ("Scratch", 10, 25, "Normal");
var flamethrower = new Attack ("Flamethrower", 35, 20, "Fire");
var fireSpin = new Attack ("Fire Spin", 45, 5, "Fire");

var bubble = new Attack ("Bubble", 95, 20, "Water");
var rainSplash = new Attack ("Rain Splash", 110, 25, "Water");
var waterGun = new Attack ("Water Gun", 115, 20, "Water");

//ObjPoke es un obj literal / arrays de pokemones

var objPoke = [
    {
        "name" : "Charmander",
        "life" : 105,
        "type" : "Fire",
        "level" : 1,
        "attacks" : [ember, scratch,flamethrower,fireSpin],
        "defense" : 65,
    },

    {
        "name" : "Squirtle",
        "life" : 100,
        "type" : "Water",
        "level" : 1,
        "attacks" : [bubble,rainSplash,waterGun,tackle],
        "defense" : 75,
    },

    {
        "name" : "Bulbasaur",
        "life" : 95,
        "type" : "Plant",
        "level" : 1,
        "attacks" : [vineWhip,tackle,razorLeaf,solarBeam],
        "defense" : 75,
    },
]



//PRUEBA DE COSAS


/* gameStates.playerPoke.attack(gameStates.enemyPoke, 100);
gameStates.enemyPoke.attack(gameStates.playerPoke, 100); */


