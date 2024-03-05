import { Component } from '@angular/core';

@Component({
	selector: 'app-padre',
	templateUrl: './padre.component.html',
	styleUrls: ['./padre.component.css']
})
export class PadreComponent {
  
  //CONTADOR:
	// 1. Crear variable ValorContador e inicializarla en 0
	valorContador: number = 0;
	// 2. ir a padre.component.html y agregar el valorContador

  //----------------------------------------------------
	// 9.2 Creando el 'mensajePadre'
	// mensajePadre = 'Ojalá Messi llegue al próximo mundial';

  // 9.3 luego ir a hijo.component.ts y crear un 'recibeHijo'

	//----------------------------------------------------
	// 6. Creando los métodos de clase
	incrementar() {
		this.valorContador++;
	}

	decrementar() {
		this.valorContador--;
	}
	// 7. Ir a crear los eventos 'click' en padre.component.html

  //---------------------------------------------------------------------
  // 10. RECIBIENDO DATOS DEL HIJO EN EL PADRE
  //crear un 'mensajeRecibido'
  mensajeRecibido: string = '';

  // 10.1 Método que se ejecutará con lo que mande el hijo por parámetro
  recibirMensaje($event: string) {
    this.mensajeRecibido = $event;
  }

  // 10.2 ir a padre.component.html

	
}
