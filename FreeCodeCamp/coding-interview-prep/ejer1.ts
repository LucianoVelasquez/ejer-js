/* 
  https://www.freecodecamp.org/espanol/learn/coding-interview-prep/algorithms/find-the-symmetric-difference
*/

/* 

  El término matemático diferencia simétrica ( o ) de dos conjuntos 
  es el conjunto de elementos que están en cualquiera de los dos conjuntos pero no en ambos. 
  For example.△⊕A = {1, 2, 3}B = {2, 3, 4}A △ B = {1, 4}

       I
  A = {1, 2, 3}

       e      
  B = {2, 3, 4}

  A △ B = {1}

*/
 
export function diferenciaSimetrica(conjunA : number[], conjunB : number[]){

  let result : number[] = [];

  result = result.concat(busquedaDenumero(conjunA,conjunB));
  result = result.concat(busquedaDenumero(conjunB,conjunA))

  return result;
}

function busquedaDenumero(conjunto1 : number[],conjunto2 : number[]) : number[]{

  let preResult : number[] = [];

  for (let i = 0; i < conjunto1.length; i++) {
    
    let findElement : number | undefined = conjunto2.find((elemnt) => conjunto1[i] == elemnt );

    if(findElement == undefined){
      
        preResult.push(conjunto1[i]);

    }

     
  }

  return preResult;
}

function eliminarRepetidos(array : number[]){
  /* Repasar algoritmo de busqueda */
}

