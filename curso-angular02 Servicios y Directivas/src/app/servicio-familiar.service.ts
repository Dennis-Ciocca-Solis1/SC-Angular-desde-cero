import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ServicioFamiliarService {
	// IMPLEMETANDO UN SERVICIO que permita comunicarse entre hermanos

	// 0. generear componente 'hermano'
	// 0.1 crear servicio: ng g s servicio-familiar

	// 1. Creando variables para los hermanos
	hermanoGrande?: string;
	hermanoPequeno?: string;

	// 1.1 Creando sus setters y getters
	getHermanoGrande() {
		return this.hermanoGrande || '';
	}

	setHermanoGrande(hermano: string) {
		this.hermanoGrande = hermano;
	}

	getHermanoPequeno() {
		return this.hermanoPequeno || '';
	}

	setHermanoPequeno(hermano: string) {
		this.hermanoPequeno = hermano;
	}

	//2. Recibiendo A Uno De Los Hermanos Para Que Salude Al Otro En La Consola
	saludar(hermano: string) {
		console.log(`Hola ${hermano}`);
	}

  // 3. Preguntar por hijo
  preguntarPorHijo():string {
    return '¿Cómo está tu hijo?';
  }

  //4. Injectar ServicioFamiliarService en ambos hermanos
  //ir a padre.component.ts

	constructor() {}

}
