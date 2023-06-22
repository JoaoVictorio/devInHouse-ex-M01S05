function adicionarElemento(array, elemento) {
  array.push(elemento); 
  return array;
}

function removerUltimoElemento(array) {
  return array.pop(); 
}

function removerElementosIntervalo(array, indiceInicial, indiceFinal) {
  array.splice(indiceInicial, indiceFinal - indiceInicial + 1);
  return array;
}

const meuArray = [1, 2, 3, 4, 5];

console.log("Array inicial:", meuArray);

const arrayAtualizado1 = adicionarElemento(meuArray, 6);
console.log("Array após adicionar elemento:", arrayAtualizado1);

const elementoRemovido = removerUltimoElemento(arrayAtualizado1);
console.log("Elemento removido:", elementoRemovido);
console.log("Array após remover último elemento:", arrayAtualizado1);

const arrayAtualizado2 = removerElementosIntervalo(arrayAtualizado1, 1, 3);
console.log("Array após remover elementos no intervalo:", arrayAtualizado2);