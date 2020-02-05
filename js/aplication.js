

//Funcion para randomizar 

function GetRandomInt(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min; 
} 




//Función para seleccionar a los pokemones segun un parametro de 0 a 2 y ejecuta función que instancea

function selector(select = 0){
    let e = GetRandomInt(0, objPoke.length - 1);
    instancePoke(e, select);
    attacksPlayer();
}

// Recorre el array de los ataques, y ejecuta la función que asigna los botones a cada ataque

function attacksPlayer(){
    gameStates.playerPoke.attacks.forEach( (attack, key) => {
        asignarAtaque(attack,key);
        nameAttack (attack,key);
        iconAttack (attack,key);
    });
}

// Recorre el array de los pokemones, y ejecuta la función para asignar pokemones
objPoke.forEach( (select, index) =>{
    asignarPokemon(index, select);
});

//Funcion que regula el ataque del enemy

function enemyAttack(){
    var ataqueEnemy = GetRandomInt(0,3);
    var enemyDamage = resisDebEnemy(gameStates.enemyPoke.attacks[ataqueEnemy]);
    var damageEnemy = gameStates.enemyPoke.attack(gameStates.playerPoke,enemyDamage);  
    dispararAtaque('right', `${gameStates.enemyPoke.name} use ${gameStates.enemyPoke.attacks[ataqueEnemy].name} and the damage was ${damageEnemy}!`);
    
}


//Funcion que ejecuta el ataque y le resta cantidad

function playerAttack(attack){
    var damageResis = resisDebPlayer(attack);
    var damagePlayer = gameStates.playerPoke.attack(gameStates.enemyPoke, damageResis);     
    attack.quantities -= 1;
    dispararAtaque("left", `${gameStates.playerPoke.name} use ${attack.name} and the damage was ${damagePlayer}!`);

}


// Funcion que calcula la resis y deb del player

function resisDebPlayer(attack){
    var actualAttack1 = attack.damage;
    if(attack.type == "Normal"){
        return actualAttack1;
    }
        if(gameStates.playerPoke.type == "Fire" && gameStates.enemyPoke.type == "Water" 
        || gameStates.playerPoke.type == "Water" && gameStates.enemyPoke.type == "Plant" 
        || gameStates.playerPoke.type == "Plant" && gameStates.enemyPoke.type == "Fire"){
                    if(actualAttack1 <= 0){
                        return actualAttack1 = 0;
                    } 
                                return actualAttack1 -= 10;
                            }
                
                else if(gameStates.playerPoke.type == "Water" && gameStates.enemyPoke.type == "Fire" 
                        || gameStates.playerPoke.type == "Plant" && gameStates.enemyPoke.type == "Water" 
                        || gameStates.playerPoke.type == "Fire" && gameStates.enemyPoke.type == "Plant"){
                                return actualAttack1 += 10;
                }

                            else{
                                return actualAttack1;
                            }

}

// Funcion que calcula la resis y deb del enemy

function resisDebEnemy(attack){
    var actualAttack2 = attack.damage;
    if(gameStates.playerPoke.type == "Water" && gameStates.enemyPoke.type == "Fire" 
                            || gameStates.playerPoke.type == "Plant" && gameStates.enemyPoke.type == "Water" 
                            || gameStates.playerPoke.type == "Fire" && gameStates.enemyPoke.type == "Plant"){
                                if(actualAttack2<= 0){
                                    return actualAttack2 = 0;
                                }   
                                    return actualAttack2 -= 10;
                            }
                else if(gameStates.playerPoke.type == "Fire" && gameStates.enemyPoke.type == "Water" 
                || gameStates.playerPoke.type == "Water" && gameStates.enemyPoke.type == "Plant" 
                || gameStates.playerPoke.type == "Plant" && gameStates.enemyPoke.type == "Fire"){
                        
                        return actualAttack2 += 10;
                        }           
                            
                                    else{
                                        return actualAttack2;
                                    }

}












// CHEQUEAR QUE ES 


// Variables Globales
// Cuando carga

/* document.addEventListener('DOMContentLoaded', (e)=>{
    e.preventDefault()
    console.log('Hola');
    document.getElementById('btnAttack1').addEventListener("click", () => { console.log('Ataque agua') })
    document.getElementById('btnAttack2').addEventListener("click", () => { console.log('Ataque fuego') })
    document.getElementById('btnAttack3').addEventListener("click", () => { console.log('Ataque hoja') })
    document.getElementById('btnAttack4').addEventListener("click", () => { console.log('Ataque tierra') })
})*/
