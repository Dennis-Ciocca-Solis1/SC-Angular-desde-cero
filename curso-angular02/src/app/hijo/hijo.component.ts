import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-hijo',
	templateUrl: './hijo.component.html',
	styleUrls: ['./hijo.component.css']
})
export class HijoComponent {
	//este es el mensaje que recibimos del componente padre
	// Creando el recibeHijo e inicializándolo
	// @Input() recibeHijo: string = '';

	// ir a hijo.component.html
	// ---------------------------------------------------------

	// Declarando un 'emisor' desde el hijo hacia el padre
	//importar EventEmitter
	@Output() mensajeDesdeHijo = new EventEmitter<string>();

	// ---------------------------------------------------------
	// Realizando emisiones vacías
	@Output() incrementarDesdeHijo = new EventEmitter<void>();
	@Output() decrementarDesdeHijo = new EventEmitter<void>();

	// ir a hijo.component.html

	// ---------------------------------------------------------
	// Emitiendo el mensaje
	mensaje: string = '';
	//
	enviarMensaje() {
		this.mensajeDesdeHijo.emit(this.mensaje);
	}

	// ir a hijo.component.html

	// ---------------------------------------------------------
	// 
	// ++++++++++++++++++++++
	// reemplaza a 11.4
	incrementar() {
		this.incrementarDesdeHijo.emit();
	}

	decrementar() {
		this.decrementarDesdeHijo.emit();
	}

  // ir a padre.component.html

	// ---------------------------------------------------------
	// Hacer otra emisión
	// ir a la línea 22 de this.padre.component.ts
}
