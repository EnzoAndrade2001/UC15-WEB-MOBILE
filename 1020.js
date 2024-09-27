//Exercicio 3

var idadeEmDias = parseInt(input.trim()); 


var anos = Math.floor(idadeEmDias / 365);
idadeEmDias %= 365; 

var meses = Math.floor(idadeEmDias / 30);
var dias = idadeEmDias % 30;


console.log(`${anos} ano(s)`);
console.log(`${meses} mes(es)`);
console.log(`${dias} dia(s)`);