import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'miPipePersonalizado'
})
export class MiPipePersonalizadoPipe implements PipeTransform {

  // PIPE PERSONALIZADO
  // 0. Crear un pipe personalizado
  // ng g p mi-pipe-personalizado

  // 1. Creando el pipe personalizado
  transform(valor: string | undefined): string { //recibe un valor y a veces un argumento
    return valor?.toUpperCase() || '';
  }

  // 1.1 ir a padre.component.html

}
