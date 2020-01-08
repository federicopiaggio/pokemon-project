// $(document).ready(function(){
//     var $pokemon1 = $("#idPokemon1");
//     var $pokemon2 = $("#idPokemon2");
// });
// Variables Globales
// Cuando carga
document.addEventListener('DOMContentLoaded', (e)=>{
    e.preventDefault()
    console.log('Hola');
    document.getElementById('btnAttack1').addEventListener("click", () => { console.log('Ataque agua') })
    document.getElementById('btnAttack2').addEventListener("click", () => { console.log('Ataque fuego') })
    document.getElementById('btnAttack3').addEventListener("click", () => { console.log('Ataque hoja') })
    document.getElementById('btnAttack4').addEventListener("click", () => { console.log('Ataque tierra') })
})






