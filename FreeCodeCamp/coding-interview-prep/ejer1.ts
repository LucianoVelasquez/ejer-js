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
 
export function diferenciaSimetrica(...args : number[][]){

  let result : number[] = [];

  if(args.length == 2){
    result = result.concat(busquedaDenumero(args[0],args[1]));
    result = result.concat(busquedaDenumero(args[1],args[0]));

    return result;
  }

  if(args.length == 3){

    let salida : number[] = []

    result = result.concat(busquedaDenumero(args[0],args[1]));
    result = result.concat(busquedaDenumero(args[1],args[0]));

    salida = salida.concat(busquedaDenumero(args[2],result));
    salida = salida.concat(busquedaDenumero(result,args[2]));

    return salida;
  } 

  return result;
}

function busquedaDenumero(conjunto1 : number[],conjunto2 : number[]) : number[]{

  let preResult : number[] = [];

  for (let i = 0; i < conjunto1.length; i++) {
    
    let findElement : number | undefined = conjunto2.find((elemnt) => conjunto1[i] == elemnt );

    if(findElement == undefined && !preResult.includes(conjunto1[i])){
        preResult.push(conjunto1[i]); 
    }
     
  }

  return preResult;
}


