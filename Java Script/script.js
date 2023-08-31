var numero1 = 100
var numero2 = 50
var nome = "Kemylin"

// if (numero1 > numero2) {
//     console.log("Sim o numero é MAIOR")
//     // document.getElementById('resposta').innerHTML = '<h1>Sim o numero é MAIOR</h1>'
// }

// else if(numero1 == numero2){
// console.log("Os números são iguais!!!")
// }

// else {
// console.log("Não, o número não é MAIOR")
// }

// () serve pra passar informações, propriedades, na página, um popap

function Comparar(){
var nmr1 = document.getElementById('numero1').value

var nmr2 = document.getElementById('numero2').value

console.log(nmr1)
console.log(nmr2)

if(parseInt(nmr1) > parseInt(nmr2)){
    console.log("O número: " + nmr1 + " é maior que o número " + nmr2)
    alert("O número: " + nmr1 + " é maior que o número " + nmr2)
}
else if(parseInt(nmr1) == parseInt(nmr2)){
    alert("os dois números são IGUAIS")
}
else{
alert ("O número: " + nmr1 + " é maior que o número " + nmr2)
}


}
