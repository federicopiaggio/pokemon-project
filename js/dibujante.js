



var vineWhip = new attack("Vine Whip", 20 , 20, "Plant");
var tackle = new attack("Tackle", 15, 25, "Normal");
var razorLeaf = new attack("Razor Leaf", 30, 10, "Plant");
var solarBeam = new attack("Solar Beam", 40 , 5, "Plant");

var ember = new attack("Ember", 20, 20, "Fire");
var scratch = new attack("Scratch", 10, 25, "Normal");
var flamethrower = new attack("Flamethrower", 35, 20, "Fire");
var fireSpin = new attack("Fire Spin", 45, 5, "Fire");

var bubble = new attack("Bubble", 25, 20, "Water");
var rainSplash = new attack("Rain Splash", 30, 25, "Water");
var waterGun = new attack("Water Gun", 40, 20, "Water");


var charmander = new pokemon("Charmander", 45, "Fire" , 1, [ember, scratch,flamethrower,fireSpin], 50);
var squirtle = new pokemon("Squirtle", 40, "Water" , 1, [bubble,rainSplash,waterGun,tackle], 70);
var bulbasaur = new pokemon("Bulbasaur", 40 , "Plant", 1, [vineWhip,tackle,razorLeaf,solarBeam], 80);


var player = charmander;


