export function narcissistic(value: number) {
  // Code me to return true or false
  const potencia = value.toString().length;
  let suma = 0;
  let digitos = value.toString().split("");

  for (let i = 0; i < digitos.length; i++) {

    suma += Math.pow(parseInt(digitos[i]),potencia);
    
  }

  return value == suma;
  
}
