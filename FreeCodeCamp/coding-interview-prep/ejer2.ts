/* 

  https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/inventory-update

 Compare y actualice el inventario almacenado en una matriz 2D con una segunda matriz 2D de una nueva entrega.
 Actualice las cantidades de artículos de inventario existentes actualmente. 
 Si no se puede encontrar un artículo, agregue el nuevo artículo y la cantidad a la matriz de inventario. 
 La matriz de inventario devuelta debe estar en orden alfabético por artículo

*/

export function updateInventory(arr1 : [number,string][], arr2 : [number,string][]) {

  //Recorrermos el inventario actual.
  for (let i = 0; i < arr1.length; i++) {

    //Recorremos el nuevo inventario.
    for (let j  = 0; j  < arr2.length; j++) {
      
      if(arr1[i].includes(arr2[j][1])){
        
        arr1[i][0] = arr1[i][0]+arr2[j][0];
        arr1 = arr1.filter((elemt) => elemt[1] != arr2[j][1]);
        arr2 = arr2.filter((elemt) => elemt[1] != arr1[j][1]);


      }
      
    }
    
  }

  arr2.map((e) =>{
    arr1.push(e);
  })


  return arr1;
}


