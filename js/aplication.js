

//Funcion para randomizar 

function GetRandomInt(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min; 

} 




//Función para seleccionar a los pokemones segun un parametro de 0 a 2 y ejecuta función que instancea

function selector(select = 0){
    let e = GetRandomInt(0, objPoke.length - 1);
    instancePoke(e, select);
}


// Recorre el array de los pokemones, y ejecuta la función para asignar pokemones
objPoke.forEach( (objPoke, index) =>{
    btnPoke[index] = document.getElementById("btnPoke" + index);
});

// funcion que maneja la selección de eventos click en pokemon


function playerAttack(index){
    var attack = (gameStates.playerPoke.attacks[index]);
        attack.quantities -= 1;
        var damageResis = resisDebPlayer(attack); 
        var damagePlayer = gameStates.playerPoke.attack(gameStates.enemyPoke, damageResis); 
        dispararAtaque("left", `${gameStates.playerPoke.name} use ${attack.name} and the damage was ${damagePlayer}!`);
        $("#lifeBar2").attr("value", gameStates.enemyPoke.life);
        $("#numLife2").text(gameStates.enemyPoke.life); 
/*         console.log( "cantidad de ataques = " + attack.quantities);

        console.log("ataque jugador" + index + " ------------------------------------------------------"); */
    if(attack.quantities == 0){
        btnAttack[index].off("click");
        $('#btnAttack'+ (index)).fadeTo("slow", 0.3);
        return false;
    }
}


//Funcion que regula el ataque del enemy

function enemyAttack(){
    var bool = true;
    if(gameStates.enemyPoke.life <= 0){
        /* console.log("You win!"); */
        alert("You win!");
        btnAttack[0].off("click");
        btnAttack[1].off("click");
        btnAttack[2].off("click");
        btnAttack[3].off("click");
        btnAttack = [];
        resetMain();
        dispararAtaque("left", "");
        dispararAtaque("right", "");


        bool = false;
    }

    else{
        var ataqueEnemy = GetRandomInt(0,3);
        var enemyDamage = resisDebEnemy(gameStates.enemyPoke.attacks[ataqueEnemy]);
        var damageEnemy = gameStates.enemyPoke.attack(gameStates.playerPoke,enemyDamage);  
        dispararAtaque('right', `${gameStates.enemyPoke.name} use ${gameStates.enemyPoke.attacks[ataqueEnemy].name} and the damage was ${damageEnemy}!`);

        $("#lifeBar1").attr("value", gameStates.playerPoke.life);
        $("#numLife1").text(gameStates.playerPoke.life);


        if(gameStates.playerPoke.life <= 0){
            /* console.log("You lose!"); */
            alert("You lose!"); 

        btnAttack[0].off("click");
        btnAttack[1].off("click");
        btnAttack[2].off("click");
        btnAttack[3].off("click");
        btnAttack = [];
        resetMain();
        dispararAtaque("left", "");
        dispararAtaque("right", "");
        bool = false;
        }  
    }
/*     console.log("ataque enemigo ------------------------------------------------------"); */

    return bool; 

}

function checkLife(){

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
                    if(actualAttack1 < 0){
                        return actualAttack1 = 0;
                    } 
                                return actualAttack1 -= 5;
                            }

                else if(gameStates.playerPoke.type == "Water" && gameStates.enemyPoke.type == "Fire" 
                        || gameStates.playerPoke.type == "Plant" && gameStates.enemyPoke.type == "Water" 
                        || gameStates.playerPoke.type == "Fire" && gameStates.enemyPoke.type == "Plant"){
                                return actualAttack1 += 5;
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
                if(actualAttack2 < 0){
                    return actualAttack2 = 0;
                }   
                       return actualAttack2 -= 5;
                            }
                else if(gameStates.playerPoke.type == "Fire" && gameStates.enemyPoke.type == "Water" 
                || gameStates.playerPoke.type == "Water" && gameStates.enemyPoke.type == "Plant" 
                || gameStates.playerPoke.type == "Plant" && gameStates.enemyPoke.type == "Fire"){

                        return actualAttack2 += 5;
                        }           

                                    else{
                                        return actualAttack2;
                                    }

}

asignarPokemon();