import { dnaStrand } from "./Ejer/ejer1";
import { XO } from './Ejer/ejer2'
import { solution } from './Ejer/ejer3'
import { findOdd } from './Ejer/ejer4'
import { countBits } from './Ejer/ejer5'
import { pigIt } from './Ejer/ejer6'
import {narcissistic} from './Ejer/ejer7'
import {tribonacci} from './Ejer/ejer8'
import { TestSearch } from "./Ejer/testSearch";


class Main{

    
    public static ejectuarMain() {

       const result = TestSearch.implementarBusqueda(200);

       console.log(result == undefined? "No se encontro resultado": `Resultado : ${result}`);
       


    }

}

Main.ejectuarMain();