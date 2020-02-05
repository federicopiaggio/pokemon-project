

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


//Funcion que asigna el nombre segun el tipo de ataque 

function nameAttack (attack,key){
    $("#btnName"+ (key + 1)).text(attack.name);
}

//Funcion que asigna la imagen segun el tipo de ataque 

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

// Función que asigna cada ataque a cada botón del pokemon y lanza los eventos que modifican la visual y los ataques de los pokemones

function asignarAtaque(attack,key){

    $('#btnAttack'+(key + 1)).on("click", () => {
        
        playerAttack(attack);

        if (attack.quantities == 0){
            $('#btnAttack'+ (key + 1)).off("click");
            $('#btnAttack'+ (key + 1)).animate({opacity: '0.3'}, 1200);
        }

        $("#lifeBar2").attr("value", gameStates.enemyPoke.life);
        $("#numLife2").text(gameStates.enemyPoke.life);

        if(gameStates.enemyPoke.life <= 0){
            alert("You win!");
            return false;
        }

        enemyAttack();

        if(gameStates.playerPoke.life <= 0){
            alert("You lose!"); 
            return false;
        }  
        
        $("#lifeBar1").attr("value", gameStates.playerPoke.life);
        $("#numLife1").text(gameStates.playerPoke.life);
        
        
    });
}

   

  

// Funcion que asigna cada pokemon segun parametro y cada boton

function asignarPokemon(key, select){
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