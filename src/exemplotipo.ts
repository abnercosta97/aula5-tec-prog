//Exemplo aula Tipos
function concatenar<T>(vet: T[], item: T) {
  vet.push(item);
}
const nros: number[] = [];
concatenar(nros, 18);
concatenar(nros, 11);
console.log(nros);
const nomes: string[] = [];
concatenar(nomes, "Carlos");
concatenar(nomes, "Paulo");
console.log(nomes);

//Tipagem Dinamica