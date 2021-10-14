
// Creacion manual de Pipe

import { Pipe, PipeTransform } from "@angular/core";

// Agregando un decorador
@Pipe({
    name: 'mayusculas',
})

// todos los pipes deben implemtar el metodo Pipetransform
export class MayusculasPipe implements PipeTransform {
    // el transform puede regresar cualquier cosa
    // siempre debe regresar algo
    transform(valor:string, enMayusculas: boolean = true): string {

        // if (enMayusculas) {
        //     return valor.toUpperCase();
        // }else{
        //     return valor.toLowerCase();
        // }

        // como expresion ternaria
        return (enMayusculas)?valor.toUpperCase(): valor.toLowerCase();
    }
}