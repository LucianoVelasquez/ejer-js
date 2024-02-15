/* 
  https://www.codewars.com/kata/526571aae218b8ee490006f4/train/javascript
  TODO Escriba una función que tome un número entero como entrada y devuelva el número de bits que son iguales a uno en la representación binaria de ese número. Puede garantizar que la entrada no sea negativa.

  Ejemplo: La representación binaria de es , por lo que la función debe devolver en este caso1234100110100105

*/

 
export let countBits = function(n:number) {
  // Program Me
  let bina : number[] = [];

  while(n > 0){

    n%2 == 0? bina.push(0) : bina.push(1);

    n = Math.floor(n / 2);

  }

  return bina.reverse().filter((e) => e == 1).length;
  

};