

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

// Función que asigna cada ataque a cada botón del pokemon

function asignarAtaque(attack,key){
    document.getElementById('btnAttack'+(key + 1)).addEventListener("click", () => {
        gameStates.playerPoke.attack(gameStates.enemyPoke, attack.damage);
        if(gameStates.enemyPoke.life <= 0){
            alert(gameStates.playerPoke.name + " ha ganado!");
            return false;
        }
        var ataqueEnemy = GetRandomInt(0,3);
        gameStates.enemyPoke.attack(gameStates.playerPoke,gameStates.enemyPoke.attacks[ataqueEnemy].damage);
        if(gameStates.playerPoke.life <= 0) {
            alert(gameStates.enemyPoke.name + " ha ganado!");
            return false;
        }
        dispararAtaque("left", `${gameStates.playerPoke.name} uso el ataque ${attack.name} la vida del enemigo es ${gameStates.enemyPoke.life}`);
        dispararAtaque('right', `${gameStates.enemyPoke.name} uso el ataque ${gameStates.enemyPoke.attacks[ataqueEnemy].name}  la vida del enemigo es ${gameStates.playerPoke.life}`)
    } );
}

// Funcion que asigna cada pokemon segun parametro y cada boton

function asignarPokemon(key, select){
    console.log("lala");
    console.log(key, select);
    document.getElementById('btnPoke' + (key + 1)).addEventListener("click", () => {
        selector(key);
        $("#imgPoke1").attr("src", "./sprites/" + select.name + ".png");
        $("#imgPoke2").attr("src", "./sprites/" + gameStates.enemyPoke.name + ".png");
         $("#pokemon-trainer").text(gameStates.playerPoke.name);
        $("#pokemon-enemy").text(gameStates.enemyPoke.name);
        $("#main1").addClass("hidden");
        $("#main1").removeClass("main");
        $("#main2").removeClass("hidden");
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