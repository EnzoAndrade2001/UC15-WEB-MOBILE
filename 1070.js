//Exercicio 5
var X = parseInt(input.trim()); 


if (X % 2 === 0) {
    X++; // Se X for par, começa no próximo ímpar
}


for (let i = 0; i < 6; i++) {
    console.log(X);
    X += 2; // Incrementa para o próximo número ímpar
}