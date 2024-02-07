/* 
  TODO: Complete la solución de modo que la función rompa la carcasa del camello, usando un espacio entre las palabras Ejemplo: "camelCasing"  =>  "camel Casing", "identifier"   =>  "identifier",  ""             =>  ""


*/

export function solution(string:string) : string {

  if(string == "") return "";

  let letras = string.split("");

  return letras.map((e)=> e == e.toUpperCase() ? " "+e : e).join("");

}