/* 
  https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript
  TODO: Dada una matriz de números enteros, encuentre el que aparece un número impar de veces. Siempre habrá un solo número entero que aparezca un número impar de veces.

Ejemplos
[7] debería devolver, porque ocurre 1 vez (lo cual es impar).7
debería devolver, porque ocurre 1 vez (lo cual es impar).[0]0
debería devolver, porque ocurre 1 vez (lo cual es impar).[1,1,2]2
debería devolver, porque ocurre 3 veces (lo cual es impar).[0,1,0,1,0]0
debería devolver , porque aparece 1 vez (lo cual es impar).[1,2,2,3,3,3,4,3,3,3,2,2,1]4
*/

export function findOdd(A: number[]) {

  if(A.length == 1) return A[0];

  let numerImp : number = 999;

  A.forEach((numero)=>{

    let cantidadN = A.filter((n) => n == numero).length;
    
    if(cantidadN%2 != 0 && cantidadN < numerImp){
      numerImp = numero;
    }

  })

  return numerImp;
}