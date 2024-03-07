import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ServicioFamiliarService {
	// IMPLEMETANDO UN SERVICIO que permita comunicarse entre hermanos

	// generear componente 'hermano'
	// crear servicio: ng g s servicio-familiar

	// Creando variables para los hermanos
	hermanoGrande?: string;
	hermanoPequeno?: string;

	// Creando sus setters y getters
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

	// Recibiendo A Uno De Los Hermanos Para Que Salude Al Otro En La Consola
	saludar(hermano: string) {
		console.log(`Hola ${hermano}`);
	}

	// Preguntar por hijo
	preguntarPorHijo(): string {
		return '¿Cómo está tu hijo?';
	}

	// Injectar ServicioFamiliarService en ambos hermanos
	//ir a padre.component.ts

	constructor() {}
}
