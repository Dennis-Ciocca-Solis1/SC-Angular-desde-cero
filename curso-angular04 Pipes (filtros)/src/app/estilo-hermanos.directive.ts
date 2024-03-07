import { Directive, ElementRef } from '@angular/core';

// DIRECTIVAS
// Crear la directiva 'estilo-hermanos'
// ng g d estilo-hermanos

@Directive({
	selector: '[appEstiloHermanos]'
})
export class EstiloHermanosDirective {
	
	// Inyectar en el constructor la referencia al elemento HTML

	constructor(private element: ElementRef) {
		// Pintar el elemento HTML con el 'style.backgroundColor'
		this.element.nativeElement.style.backgroundColor = 'green';

		// Pintar el elemento HTML con el 'style.fontStyle'
		this.element.nativeElement.style.fontStyle = 'italic';
	}

	// Llevar la directiva a ambos hermanos
	// ir a padre.component.html
}
