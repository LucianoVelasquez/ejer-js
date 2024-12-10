/* 
  https://www.codewars.com/kata/564d398e2ecf66cec00000a9/train/javascript
*/

export const typeOfTriangle = function (sideA : number, sideB : number, sideC: number) : string {
  
  if(sideA == sideB && sideB == sideC){
    return "Equilateral";
  }

  if((sideA == sideB && sideA != sideC) || (sideA == sideC && sideA != sideB) ||  (sideC == sideA && sideC != sideB)){
    return "Isosceles";
  }

  if(sideA != sideB && sideB != sideC){
    return "Scalene"
  }

  return "";

}