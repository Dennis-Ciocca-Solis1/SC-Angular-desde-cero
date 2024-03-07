import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-hijo',
	templateUrl: './hijo.component.html',
	styleUrls: ['./hijo.component.css']
})
export class HijoComponent {
	//este es el mensaje que recibimos del componente padre
	// 9.4 Creando el recibeHijo e inicializándolo
	// @Input() recibeHijo: string = '';

	// 9.5 ir a hijo.component.html
	// ---------------------------------------------------------

	// 10.5 Declarando un 'emisor' desde el hijo hacia el padre
	//importar EventEmitter
	@Output() mensajeDesdeHijo = new EventEmitter<string>();

	// ---------------------------------------------------------
	// 11.6 Realizando emisiones vacías
	@Output() incrementarDesdeHijo = new EventEmitter<void>();
	@Output() decrementarDesdeHijo = new EventEmitter<void>();

	// 11.7 ir a hijo.component.html

	// ---------------------------------------------------------
	// 10.6 Emitiendo el mensaje
	mensaje: string = '';
	//
	enviarMensaje() {
		this.mensajeDesdeHijo.emit(this.mensaje);
	}

	// 10.7 ir a hijo.component.html

	// ---------------------------------------------------------
	// 11.4
	// ++++++++++++++++++++++
	// 11.10 reemplaza a 11.4
	incrementar() {
		this.incrementarDesdeHijo.emit();
	}

	decrementar() {
		this.decrementarDesdeHijo.emit();
	}

  // 11.11 ir a padre.component.html

	// ---------------------------------------------------------
	// 11.5 Hacer otra emisión
	// ir a la línea 22 de this.padre.component.ts
}
