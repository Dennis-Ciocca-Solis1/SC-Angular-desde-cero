import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {

  //1. Crear variable ValorContador e inicializarla en 0
  valorContador: number = 0;
  //2. ir a padre.component.html y agregar el valorContador

  //----------------------------------------------------
  // 6. Creando los métodos de clase
  incrementar() {
    this.valorContador++;
  }

  decrementar() {
    this.valorContador--;
  }

  // 7. Ir a crear los eventos 'click' en padre.component.html

}
