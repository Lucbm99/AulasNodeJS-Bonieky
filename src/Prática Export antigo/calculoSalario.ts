const salario = require('./Salario');

let valor_salario: number = 2000;
let horas: number = 9;

console.log(`O valor do salario será: ${salario.calculoSalario(valor_salario, horas)}`);