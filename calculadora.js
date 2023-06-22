function calculadora(numero1, numero2, operacao) {
  return operacao(numero1, numero2);
}

function adicao(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}

function multiplicacao(a, b) {
  return a * b;
}

function divisao(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    console.log("Erro: Divisão por zero.");
    return null;
  }
}

let resultado = calculadora(10, 5, adicao);
console.log("Resultado da adição:", resultado);

resultado = calculadora(10, 5, subtracao);
console.log("Resultado da subtração:", resultado);

resultado = calculadora(10, 5, multiplicacao);
console.log("Resultado da multiplicação:", resultado);

resultado = calculadora(10, 5, divisao);
console.log("Resultado da divisão:", resultado);
