



var vineWhip = new Attack ("Vine Whip", 20 , 20, "Plant");
var tackle = new Attack ("Tackle", 15, 25, "Normal");
var razorLeaf = new Attack ("Razor Leaf", 30, 10, "Plant");
var solarBeam = new Attack ("Solar Beam", 40 , 5, "Plant");

var ember = new Attack ("Ember", 20, 20, "Fire");
var scratch = new Attack ("Scratch", 10, 25, "Normal");
var flamethrower = new Attack ("Flamethrower", 35, 20, "Fire");
var fireSpin = new Attack ("Fire Spin", 45, 5, "Fire");

var bubble = new Attack ("Bubble", 25, 20, "Water");
var rainSplash = new Attack ("Rain Splash", 30, 25, "Water");
var waterGun = new Attack ("Water Gun", 40, 20, "Water");


var charmander = new Pokemon ("Charmander", 45, "Fire" , 1, [ember, scratch,flamethrower,fireSpin], 50);
var squirtle = new Pokemon ("Squirtle", 40, "Water" , 1, [bubble,rainSplash,waterGun,tackle], 70);
var bulbasaur = new Pokemon ("Bulbasaur", 40 , "Plant", 1, [vineWhip,tackle,razorLeaf,solarBeam], 80);
var trainer = new Trainer("Jugador");
var enemy = new Trainer ("Enemigo");


var player = charmander;
var enemy = squirtle;



