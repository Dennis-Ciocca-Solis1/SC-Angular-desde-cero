import { Component, OnInit } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
	selector: 'app-padre',
	templateUrl: './padre.component.html',
	styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit{ //implements e import el OnInit
	// Inyectando el servicio al 'padre' con un constructor
	constructor(
		private _servicioFamiliar: ServicioFamiliarService //importar ServicioFamiliarService
	){}

	// Creando el método ngOnInit para inicializar el servicio
	//hacer el implements e import el OnInit
	nombre?: string;

	ngOnInit(): void {
		this._servicioFamiliar.setHermanoGrande('Juan');
		this.nombre = this._servicioFamiliar.getHermanoGrande();
	}
	
	// Hacer lo mismo para el 'hermanoPequeno'
	//ir a hermano.component.ts

	// --------------------------------------------------------
	// Creando un método 'saludar' para saludar al hermano pequeno utilizando el método del servicio
	saludar(){
		this._servicioFamiliar.saludar(this._servicioFamiliar.getHermanoPequeno() || '');
	}

	// Hacer lo mismo para el hermano
	// ir a hermano.component.ts

	// ------------------------------------
	// Creando un método 'preguntar' para preguntar al hermano pequeno utilizando el método del servicio
	preguntar(){
		console.log(this._servicioFamiliar.preguntarPorHijo());
	}

	// Hacer lo mismo para el hermano
	// ir a hermano.component.ts

	//***********************************************************************************
	// Creando el 'mensajePadre'
	// mensajePadre = 'Ojalá Messi llegue al próximo mundial';

	// luego ir a hijo.component.ts y crear un 'recibeHijo'

	//---------------------------------------------------------------------
	// RECIBIENDO DATOS DEL HIJO EN EL PADRE
	//crear un 'mensajeRecibido'
	mensajeRecibido: string = '';

	// Método que se ejecutará con lo que mande el hijo por parámetro
	recibirMensaje($event: string) {
		this.mensajeRecibido = $event;
	}

	// ir a padre.component.html

	// -------------------------------------------------------------------
	//CONTADOR:
	// Crear variable ValorContador e inicializarla en 0
	valorContador: number = 0;
	// ir a padre.component.html y agregar el valorContador	

	//---------------------------------------------------------------------
	// Creando los métodos de clase
	incrementar() {
		this.valorContador++;
	}

	decrementar() {
		this.valorContador--;
	}

	// Ir a crear los eventos 'click' en padre.component.html
}
