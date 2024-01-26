export function dnaStrand(dna: string): string {
  let newCadena: string = "";

  for (let i = 0; i < dna.length; i++) {
    switch (dna[i]) {
      case "A":
        newCadena += "T";
        break;
      case "T":
        newCadena += "A";
        break;
      case "C":
        newCadena += "G";
        break;
      case "G":
        newCadena += "C";
        break;    
      default:
        break;
    }
  }

  return newCadena;
}
