
export class TestSearch{

    private static listadoDeNumeros : number[] = [3,5,100,1,3,8,9,6,2,5,4,3,8,10];
    private static index : number = 0;


    public static implementarBusqueda(numberoABuscar : number) : number | undefined {

        return this.busquedaEnBucle(this.listadoDeNumeros, numberoABuscar);

    }

    private static busquedaEnBucle(listaDenumeros: number[],numeroABuscar : number) : number | undefined{

        for(let i = 0; i < listaDenumeros.length; i++){
            
            if(listaDenumeros[i] == numeroABuscar){
                return listaDenumeros[i];
            } 

        }

        return undefined;
    
    }

    private static busquedaFuncional(listaDeNumero: number[], numeroABuscar : number) : number | undefined {

        return listaDeNumero.find((element : number) => element == numeroABuscar);
    }

    private static busquedaRecursiva(listaDeNumeros: number[],numeroABuscar : number,i : number) : number | undefined {

        //Caso base
        if(listaDeNumeros[i] == undefined) return undefined;

        if(listaDeNumeros[i] == numeroABuscar) return listaDeNumeros[i];


        return this.busquedaRecursiva(listaDeNumeros,numeroABuscar,i+1);

    }


}