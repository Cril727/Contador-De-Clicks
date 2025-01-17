let ContadorPositivo = document.getElementById("btn-ContadorPositivo");
let ContadorNegativo = document.getElementById("btn-ContadorNegativo");
let numero = document.getElementById("numero");


let contador = 0

ContadorPositivo.addEventListener("click", ()=>{
    contador ++
    numero.textContent = `Contador: ${contador}`
})


ContadorNegativo.addEventListener("click", ()=>{
    contador --
    numero.textContent = `Contador: ${contador}`
})