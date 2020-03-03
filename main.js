let questionOne
let questionTwo
let questionThre

let name = prompt("Olá! Por favor, insira seu nome:");

document.getElementById('salutation').innerHTML = "Olá " + name + "!";

let startGame = prompt("Você deseja jogar?\n 1. Sim \n 2. Não");

if (startGame == 1) {

    questionOne = prompt("Quanto é 2+2?\n 1. 3\n 2. 4 \n 3. 5");
        if (questionOne == "2") {
            true
        document.getElementById('one').innerHTML = "Resposta 1";
        } else {
            false
       document.getElementById('four').innerHTML = "Resposta 1";
     }
                    
            
    questionTwo = prompt("Que cor é o céu?\n 1. Azul\n 2. Laranja \n 3. Vermelho");
         if (questionTwo == "1") {
           true
           document.getElementById('two').innerHTML = "Resposta 2";
        } else {
           false
           document.getElementById('five').innerHTML = "Resposta 2";
       }

    questionThree = prompt("O que é uma laranja? \n 1. Legume\n 2. Verdura \n 3. Fruta");
         if (questionThree == "3") {
            true
            document.getElementById('three').innerHTML = "Resposta 3";
        } else {
           false
           document.getElementById('six').innerHTML = "Resposta 3";
        }

} else {
    alert("Obrigado por participar!")
}


