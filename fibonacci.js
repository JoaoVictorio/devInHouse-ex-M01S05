var numero = parseInt(prompt("Digite um número: "));

var num1 = 0;
var num2 = 1;

console.log(num1);
console.log(num2);

// Inicialize o contador
var contador = 2;

while (contador < numero) {  
  var proximoNum = num1 + num2;  
  console.log(proximoNum);  
  
  num1 = num2;
  num2 = proximoNum;
  
  contador++;
}
