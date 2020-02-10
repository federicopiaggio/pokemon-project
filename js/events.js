

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

// Recorre el array de los ataques, y ejecuta la función que asigna los botones a cada ataque

function attacksPlayer(){
    gameStates.playerPoke.attacks.forEach( (attack, index) => {
        btnAttack[index] = $("#btnAttack"  + index);
        btnAttack[index].fadeTo("slow",1);
        renewQuants (attack, index);
        nameAttack (attack,index);
        iconAttack (attack,index);
    });
}

//Funcion que asigna el nombre segun el tipo de ataque 

function nameAttack (attack,key){
    $("#btnName"+ (key)).text(attack.name);
}

//Funcion que asigna la imagen segun el tipo de ataque 

function iconAttack (attack,key){
    if(attack.type == "Fire"){
    $("#imgAttack" + (key)).attr("src", "./sprites/ataque-fuego.png");
    }

    if(attack.type == "Plant"){
        $("#imgAttack" + (key)).attr("src", "./sprites/ataque-hoja.png");
    }

    if(attack.type == "Water"){
        $("#imgAttack" + (key)).attr("src", "./sprites/ataque-agua.png");
    }
}


   
function renewQuants (attack, key) {
    if(key == 0) {
        attack.quantities = 3;
    }
    else{
        attack.quantities = 1;
    }
}

function resetMain (){
    $("#main2").animate({opacity:0},1000);
    $("#main2").addClass("hidden");
    $("#main2").removeClass("main");
    $("#main1").addClass("main");
    $("#main1").removeClass("hidden");
    $("#main1").fadeIn();
}

// Función que asigna cada ataque a cada botón del pokemon y lanza los eventos que modifican la visual y los ataques de los pokemones
var click = 0;
function asignarAtaque(){
    btnAttack.forEach((btnAttack,index) =>{
        btnAttack.on("click",()=>{
            playerAttack(index);
            setTimeout(enemyAttack,600);
            
        });
    });

}

// funcion que maneja la selección de eventos click en pokemon

function asignarPokemon(){

    btnPoke.forEach( (btnPoke, index) =>{
        btnPoke.addEventListener("click", () =>{
            selector(index);
            attacksPlayer();
            $("#imgPoke1").attr("src", "./sprites/" + gameStates.playerPoke.name + ".png");
            $("#imgPoke2").attr("src", "./sprites/" + gameStates.enemyPoke.name + ".png");
            $("#lifeBar1").attr("max", gameStates.playerPoke.life);
            $("#lifeBar2").attr("max", gameStates.enemyPoke.life);
            $("#pokemon-trainer").text(gameStates.playerPoke.name);
            $("#pokemon-enemy").text(gameStates.enemyPoke.name);
            
            
            setTimeout(()=>{ 
            $("#main1").fadeOut(500),$("#main1").addClass("hidden")}, 100); 
            setTimeout(()=>{
                $("#main2").removeClass("hidden"),
                $("#main2").addClass("main")
            },600);
            setTimeout(()=>{
                $("#main2").animate({opacity:1},1000)
            },600);
            $("#lifeBar1").attr("value", gameStates.playerPoke.life);
            $("#lifeBar2").attr("value", gameStates.enemyPoke.life);
            $("#numLife1").text(gameStates.playerPoke.life);
            $("#numLife2").text(gameStates.enemyPoke.life);
            asignarAtaque();
            
        });
        
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