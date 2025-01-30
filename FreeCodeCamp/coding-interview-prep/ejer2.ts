/* 

  https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/inventory-update

 Compare y actualice el inventario almacenado en una matriz 2D con una segunda matriz 2D de una nueva entrega.
 Actualice las cantidades de artículos de inventario existentes actualmente. 
 Si no se puede encontrar un artículo, agregue el nuevo artículo y la cantidad a la matriz de inventario. 
 La matriz de inventario devuelta debe estar en orden alfabético por artículo

*/
//                                                                      I
//[2, "Hair Pin"],[3, "Half-Eaten Apple"],[67, "Bowling Ball"],[7, "Toothpaste"]

//                                                                j                                                                                         
//[21, "Bowling Ball"],[2, "Dirty Sock"],[1, "Hair Pin"],[5, "Microphone"]

export function updateInventory(invActual : [number,string][], invNuevo : [number,string][]) {

  let existeArticulo : boolean = false;

  //Recorrermos el inventario nuevo.
  for (let i = 0; i < invNuevo.length; i++) {

    existeArticulo = false;

    //Recorremos el actual inventario.
    for (let j  = 0; j  < invActual.length; j++) {
      
      if(invNuevo[i][1].includes(invActual[j][1])){ 

        existeArticulo = true;
        invActual[j][0] = invActual[j][0]+invNuevo[i][0];
        
        //invNuevo = invNuevo.filter((elemt) => elemt[1] != invActual[j][1]);
        break;
      }
    }

    if(!existeArticulo){
      invActual.push(invNuevo[i]);
    }
    
  }



  return ordenarAlfabeticamente(invActual);
}

function ordenarAlfabeticamente(array : [number,string][]) {

  let aux : [number,string];

  for (let i = 0; i < array.length; i++) {
    
    for (let j = 0; j < array.length-1; j++) {
      
      if(array[j][1] > array[j+1][1]){

        aux = array[j];
        array[j] = array[j+1];
        array[j+1] = aux; 

      }
      
    }
    
  }

  return array;
}


