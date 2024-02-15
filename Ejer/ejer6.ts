/* 
  TODO  Mueve la primera letra de cada palabra al final de la misma, luego agrega "ay" al final de la palabra. Deja intactos los signos de puntuación.

  pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
  pigIt('Hello world !');     // elloHay orldway !
*/

export function pigIt(str:string){
  //Code here

  let newArray = str.split(" ").map((e)=>{
    
    if(e.includes("!") || e.includes("?") ) return e; 

    let eString = e.split("");
    let aux;
    
    aux = eString[0];
    eString[0] = "";
    eString[eString.length-1] += aux+"ay";

    return eString.join("");
  });


  return newArray.join(" ");
}