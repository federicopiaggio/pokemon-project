

// Función que dispara en pantalla el texto informativo dependiendo si es el player o el enemy
function dispararAtaque( position, text = "" ){
    let dir;
    if( position === "left" ) {
        dir = document.querySelector(".display.left");
    }else{
        dir = document.querySelector(".display.right");
    }
    dir.textContent = text;
}

function nameAttack (attack,key){
    $("#btnName"+ (key + 1)).text(attack.name);
}

function iconAttack (attack,key){
    if(attack.type == "Fire"){
    $("#imgAttack" + (key + 1)).attr("src", "./sprites/ataque-fuego.png");
    }

    if(attack.type == "Plant"){
        $("#imgAttack" + (key + 1)).attr("src", "./sprites/ataque-hoja.png");
    }

    if(attack.type == "Water"){
        $("#imgAttack" + (key + 1)).attr("src", "./sprites/ataque-agua.png");
    }
}

// Función que asigna cada ataque a cada botón del pokemon y lanza los eventos que modifican la visual

function asignarAtaque(attack,key){
    document.getElementById('btnAttack'+(key + 1)).addEventListener("click", () => {
        var damagePlayer = gameStates.playerPoke.attack(gameStates.enemyPoke, attack.damage);
        $("#lifeBar2").attr("value", gameStates.enemyPoke.life);
        $("#numLife2").text(gameStates.enemyPoke.life);

        if(gameStates.enemyPoke.life <= 0){
            alert("You win!");
            return false;
        }
        var ataqueEnemy = GetRandomInt(0,3);
        var damageEnemy = gameStates.enemyPoke.attack(gameStates.playerPoke,gameStates.enemyPoke.attacks[ataqueEnemy].damage);
        $("#lifeBar1").attr("value", gameStates.playerPoke.life);
        $("#numLife1").text(gameStates.playerPoke.life);
        if(gameStates.playerPoke.life <= 0) {
            alert("You loose");
            return false;
        }
        dispararAtaque("left", `${gameStates.playerPoke.name} use ${attack.name} and the damage was ${damagePlayer}!`);
        dispararAtaque('right', `${gameStates.enemyPoke.name} use ${gameStates.enemyPoke.attacks[ataqueEnemy].name} and the damage was ${damageEnemy}!`)
    } );
}

// Funcion que asigna cada pokemon segun parametro y cada boton

function asignarPokemon(key, select){
    console.log("lala");
    console.log(key, select);
    document.getElementById('btnPoke' + (key + 1)).addEventListener("click", () => {
        selector(key);
        $("#imgPoke1").attr("src", "./sprites/" + gameStates.playerPoke.name + ".png");
        $("#imgPoke2").attr("src", "./sprites/" + gameStates.enemyPoke.name + ".png");
        $("#lifeBar1").attr("max", gameStates.playerPoke.life);
        $("#lifeBar2").attr("max", gameStates.enemyPoke.life);
        $("#pokemon-trainer").text(gameStates.playerPoke.name);
        $("#pokemon-enemy").text(gameStates.enemyPoke.name);
        $("#main1").addClass("hidden");
        $("#main1").removeClass("main");
        $("#main2").removeClass("hidden");
        $("#main2").addClass("main");
        $("#lifeBar1").attr("value", gameStates.playerPoke.life);
        $("#lifeBar2").attr("value", gameStates.enemyPoke.life);
        $("#numLife1").text(gameStates.playerPoke.life);
        $("#numLife2").text(gameStates.enemyPoke.life);
    });

}

// Remover ataque
function borrarAtaque(){
    elemento.remove()

}















//PRUEBA DE COSAS /////// CHEQUEAR FUNCIONALIDAD


    // console.log(attack1)
    // if(elemento){
    // elemento.innerHTML = attack1.name
    // let contenedor = document.querySelector('.display')
    // contenedor.appendChild(elemento)
    // } else {
    //     borrarAtaque()
    // }

    // document.getElementById('btnAttack1').addEventListener('click', dispararAtaque(attack1))

// let elemento = document.createElement('p')