//Exercicio 2
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var numeroFuncionario = parseInt(lines[0]); // Número do funcionário
var horasTrabalhadas = parseInt(lines[1]); // Horas trabalhadas
var valorPorHora = parseFloat(lines[2]); // Valor por hora


var salario = horasTrabalhadas * valorPorHora;


console.log(`Número = ${numeroFuncionario}`);
console.log(`Salário = U$ ${salario.toFixed(2)}`);