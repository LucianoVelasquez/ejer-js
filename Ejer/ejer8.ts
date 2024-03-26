export function tribonacci(signature: number[],n: number){
  //your code here  
  //https://www.codewars.com/kata/556deca17c58da83c00002db/train/javascript

  if(n < 0 ) return;
  if(signature.length < 3) return;

  let result : number[] = [];

  for (let i = 0; i < n; i++) {
    
    if( i < 3){

      result[i] = signature[i];

    }else{

      result[i] = result[i-3]+result[i-2]+result[i-1]

    }

  }

  return result;
  
}