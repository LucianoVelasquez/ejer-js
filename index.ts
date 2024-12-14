import { diferenciaSimetrica } from "./FreeCodeCamp/coding-interview-prep/ejer1";
import {  updateInventory } from "./FreeCodeCamp/coding-interview-prep/ejer2";



class Main{

    
    public static ejectuarMain() {

        var curInv : [number, string][] = [
            [21, "Bowling Ball"],
            [2, "Dirty Sock"],
            [1, "Hair Pin"],
            [5, "Microphone"]
          ];
          
          var newInv : [number,string][] = [
            [2, "Hair Pin"],
            [3, "Half-Eaten Apple"],
            [67, "Bowling Ball"],
            [7, "Toothpaste"]
          ];
          

       console.log(updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], 
                              [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]));
       


    }

}

Main.ejectuarMain();