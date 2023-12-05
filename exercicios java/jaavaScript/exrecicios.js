//fibonacci//
var fibonacci = [];
fibonacci[0] = 0;
fibonacci[1] = 1;
for (var i = 2; i < 8; i++) {
fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
}
console.log(fibonacci);
//numero primo//
const isPrime = num => {
for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
if(num % i === 0) return false;
}
return num > 1;
}
if(isPrime(6)){
console.log("É primo")
}
else{
console.log("não é primo")
}
//soma//
const qtd = [1, 2, 3, 4, 5]
let soma = 0
for(let i = 0; i < qtd.length; i++){
soma += qtd[i];
}
console.log("a soma é " + soma)
//MDC//
function calcMDC(a, b){
while (b !== 0){
const temp = b;
b = a % b;
a = temp;
}
return a;
}
const a = 10;
const b = 20;
const mdc = calcMDC(a, b);
console.log("o MDC de "+ a + " e " +b+ " e igual a :" + mdc)
//ordenação//
function qs(arr){
    if(arr.length <= 1 ){
    return arr;
    }
    const pivot = arr[0];
      const menores = [];
      const iguais = [];
      const maiores = [];
      for (let elemento of arr) {
        if (elemento < pivot) {
          menores.push(elemento);
        } else if (elemento === pivot) {
          iguais.push(elemento);
        } else {
          maiores.push(elemento);
        }
      }
      const ordenadosMenores = qs(menores);
      const ordenadosMaiores = qs(maiores);
      return ordenadosMenores.concat(iguais, ordenadosMaiores);
    }
    const arrayDesordenado = [4, 2, 7, 1, 9, 3];
    const arrayOrdenado = qs(arrayDesordenado);
    console.log("Array ordenado:", arrayOrdenado);
    //contagem//
    function cint(pd, N) {
        let contagem = 0;
        for (let i = pd; i <= N; i++) {
          if (Number.isInteger(i)) {
            contagem++;
          }
        }
        return contagem;
      } 
      const pd = 3;
      const N = 10;
      const resultado = cint(pd, N);
      console.log("Existem "+resultado+" valores inteiros no intervalo entre "+pd + " e " + N);