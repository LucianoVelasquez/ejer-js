/* 
  Sacado de https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript.
  
  Compruebe si una cadena tiene la misma cantidad de 'x' y 'o'. El método debe devolver un valor booleano y no distinguir entre mayúsculas y minúsculas. La cadena puede contener cualquier carácter.

  XO("ooxx") => true
  XO("xooxx") => false
  XO("ooxXm") => true
  XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
  XO("zzoo") => false

 */

export function XO(str: string) {
  if (!str.toLowerCase().includes("x") && !str.toLowerCase().includes("o"))
    return true;

    const x = str
    .toLowerCase()
    .split("")
    .filter((e) => e == "x");
  const o = str
    .toLowerCase()
    .split("")
    .filter((e) => e == "o");

  console.log({ x: x.length, o: o.length });

  return x.length == o.length;
}

