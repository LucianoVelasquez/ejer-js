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

  A △ B = {1,4}

  Recorrer el primer array y preguntar si cada elementeo no se encuentra incluido.
    Si el elemnto no se encuentro incluido pushearlo al nuevo array.

*/
 
export function diferenciaSimetrica(...args : number[][]){

  let result : number[] = [];

  if(args.length == 2){

    const A = args[0];
    const B = args[1];
    let AxB : number[] = [];

    AxB = AxB.concat(busquedaDenumero(A,B));
    AxB = AxB.concat(busquedaDenumero(B,A));

    return AxB;
  }

  if(args.length == 3){

    const A = args[0];
    const B = args[1];
    const C = args[2];
    let AxB : number[] = [];
    let AxBxC : number[] = []

    AxB = AxB.concat(busquedaDenumero(A,B));
    AxB = AxB.concat(busquedaDenumero(B,A));

    AxBxC = AxBxC.concat(busquedaDenumero(C,AxB));
    AxBxC = AxBxC.concat(busquedaDenumero(AxB,C));

    return AxBxC;
  } 

  if(args.length == 4){

    const A = args[0];
    const B = args[1];
    const C = args[2];
    const D = args[3];
    let AxB : number[] = [];
    let AxBxC : number[] = []
    let AxBxCxD : number[] = []

    AxB = AxB.concat(busquedaDenumero(A,B));
    AxB = AxB.concat(busquedaDenumero(B,A));

    AxBxC = AxBxC.concat(busquedaDenumero(C,AxB));
    AxBxC = AxBxC.concat(busquedaDenumero(AxB,C));

    AxBxCxD = AxBxCxD.concat(busquedaDenumero(D,AxBxC));
    AxBxCxD = AxBxCxD.concat(busquedaDenumero(AxBxC,D));
    

    return AxBxCxD;
  } 

  if(args.length == 5){

    const A = args[0];
    const B = args[1];
    const C = args[2];
    const D = args[3];
    const E = args[4];
    let AxB : number[] = [];
    let AxBxC : number[] = []
    let AxBxCxD : number[] = []
    let AxBxCxDxE : number[] = []

    AxB = AxB.concat(busquedaDenumero(A,B));
    AxB = AxB.concat(busquedaDenumero(B,A));

    AxBxC = AxBxC.concat(busquedaDenumero(C,AxB));
    AxBxC = AxBxC.concat(busquedaDenumero(AxB,C));

    AxBxCxD = AxBxCxD.concat(busquedaDenumero(D,AxBxC));
    AxBxCxD = AxBxCxD.concat(busquedaDenumero(AxBxC,D));

    AxBxCxDxE = AxBxCxDxE.concat(busquedaDenumero(E,AxBxCxD));
    AxBxCxDxE = AxBxCxDxE.concat(busquedaDenumero(AxBxCxD,E));
    

    return AxBxCxDxE;
  } 

  if(args.length == 6){

    const A = args[0];
    const B = args[1];
    const C = args[2];
    const D = args[3];
    const E = args[4];
    const F = args[5];
    let AxB : number[] = [];
    let AxBxC : number[] = []
    let AxBxCxD : number[] = []
    let AxBxCxDxE : number[] = []
    let AxBxCxDxExF : number[] = []

    AxB = AxB.concat(busquedaDenumero(A,B));
    AxB = AxB.concat(busquedaDenumero(B,A));

    AxBxC = AxBxC.concat(busquedaDenumero(C,AxB));
    AxBxC = AxBxC.concat(busquedaDenumero(AxB,C));

    AxBxCxD = AxBxCxD.concat(busquedaDenumero(D,AxBxC));
    AxBxCxD = AxBxCxD.concat(busquedaDenumero(AxBxC,D));

    AxBxCxDxE = AxBxCxDxE.concat(busquedaDenumero(E,AxBxCxD));
    AxBxCxDxE = AxBxCxDxE.concat(busquedaDenumero(AxBxCxD,E));

    AxBxCxDxExF = AxBxCxDxExF.concat(busquedaDenumero(F,AxBxCxDxE));
    AxBxCxDxExF = AxBxCxDxExF.concat(busquedaDenumero(AxBxCxDxE,F));
    

    return AxBxCxDxExF;
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


