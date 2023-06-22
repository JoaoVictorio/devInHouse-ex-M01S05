var numero = parseInt(prompt("Digite um número: "));


var i = 2;
var primo = true;

do {
  if (numero % i === 0 && i !== numero) {
    primo = false;
    break;
  }
  i++;
} while (i < numero);


if (primo) {
  console.log(numero + " é um número primo.");
} else {
  console.log(numero + " não é um número primo.");
}
