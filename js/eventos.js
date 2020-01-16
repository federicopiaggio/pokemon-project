

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
        dispararAtaque("left", `${gameStates.playerPoke.name} uso el ataque ${attack.name}`)
    } );
}

// Funcion que asigna cada pokemon segun parametro y cada boton

function asignarPokemon(key, select){
    console.log(key, select);
    document.getElementById('btnPoke' + (key + 1)).addEventListener("click", () => {
        selector(key);
        $("#main1").addClass("hidden");
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