const produtos = [
  { nome: "Contonete", preco: 15.99 },
  { nome: "Doril", preco: 29.99 },
  { nome: "Nimesulida", preco: 19.99 },
  { nome: "Dorflex", preco: 16.99 }
];

let totalProdutos = 0;
let valorTotal = 0;

for (const produto of produtos) {
  const { nome, preco } = produto; 
  
  console.log(`Nome: ${nome} | Preço: R$ ${preco.toFixed(2)}`);

  totalProdutos++;
  valorTotal += preco;
}

console.log(`Total de produtos: ${totalProdutos}`);
console.log(`Valor total: R$ ${valorTotal.toFixed(2)}`);

