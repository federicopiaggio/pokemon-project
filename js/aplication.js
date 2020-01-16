

//Funcion para randomizar de 0 a 2

function GetRandomInt(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min; 
} 

//Función para seleccionar a los pokemones segun un parametro de 0 a 2

function selector(select = 0){
    let e = GetRandomInt(0, Object.keys(objPoke).length - 1);
    gameStates.enemyPoke = new Pokemon (objPoke[e].name,objPoke[e].life,objPoke[e].type,objPoke[e].level,objPoke[e].attacks,objPoke[e].defense);
    gameStates.playerPoke = new Pokemon (objPoke[select].name,objPoke[select].life,objPoke[select].type,objPoke[select].level,objPoke[select].attacks,objPoke[select].defense);

}

//Instancia hardcodeada


// Recorre el array de los ataques, y ejecuta la función que asigna los botones a cada ataque
/* gameStates.playerPoke.attacks.forEach( (attack, key) => {
    asignarAtaque(attack, key);
}); */

// Recorre el array de los pokemones, y ejecuta la función que asigna los botones a cada ataque

// Genero un array en base al obj literal de los pokes en cada posición del obj


objPoke.forEach( (select, index) =>{
    asignarPokemon(index, select);
});












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
