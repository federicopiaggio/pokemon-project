

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


function attackImgEvent(attackType,eventAttack,attackClass){
    
    var imgAttack = document.getElementById(eventAttack);
    imgAttack.className = attackClass;
    
    switch (attackType) {
        case "Fire":
            imgAttack.src = "./sprites/ataque-fuego.png";
            break;

        case "Plant":
            imgAttack.src = "./sprites/ataque-hoja.png";
            break;

        case "Water":
            imgAttack.src = "./sprites/ataque-agua.png";
            break;

        default:
            imgAttack.src = "./sprites/ataque-normal.png";
            break;
    }

    if (eventAttack == "imgAttackPlayer"){
        document.getElementById(eventAttack).animate([
            // keyframes

            { transform: 'translateX(0px) translateY(0px)  rotateY(180deg)' }, 
            { transform: 'translateX(200px) translateY(0px)  rotateY(180deg)' },


                ], 
                    { 
                        // timing options
                        duration: 500,
                        iterations: 1
        }); 
    }
    else{
        document.getElementById(eventAttack).animate([
            // keyframes

            { transform: 'translateX(0px) translateY(0px)  rotateY(180deg)' }, 
            { transform: 'translateX(-200px) translateY(0px)  rotateY(180deg)' },


                ], 
                    { 
                        // timing options
                        duration: 500,
                        iterations: 1
        }); 

    }
        
        
}

//Funcion que asigna el nombre segun el tipo de ataque 

function switchImgAttack (){

    var imgAttackPlayer = document.getElementById(eventAttack);
    imgAttackPlayer.className = attackClass;
    
    switch (attackType) {
        case "Fire":
            imgAttackPlayer.src = "./sprites/ataque-fuego.png";
            break;

        case "Plant":
            imgAttackPlayer.src = "./sprites/ataque-hoja.png";
            break;

        case "Water":
            imgAttackPlayer.src = "./sprites/ataque-agua.png";
            break;

        default:
            imgAttackPlayer.src = "./sprites/ataque-normal.png";
            break;
    }

}






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

function asignarAtaque(){
    btnAttack.forEach((btnAttack,index) =>{
        btnAttack.on("click",()=>{
            playerAttack(index);
            
            setTimeout(enemyAttack,600);


        });
    });
}
// funcion que maneja la selección de eventos click en pokemon

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