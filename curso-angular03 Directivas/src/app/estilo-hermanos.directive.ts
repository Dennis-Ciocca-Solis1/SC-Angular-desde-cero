import { Directive, ElementRef } from '@angular/core';

// DIRECTIVAS
// 0. Crear la directiva 'estilo-hermanos'
// ng g d estilo-hermanos

@Directive({
	selector: '[appEstiloHermanos]'
})
export class EstiloHermanosDirective {

	// 1. Inyectar en el constructor la referencia al elemento HTML

	constructor(private element: ElementRef) {

		// 1.1. Pintar el elemento HTML con el 'style.backgroundColor'
		this.element.nativeElement.style.backgroundColor = 'green';

    // 1.2 Pintar el elemento HTML con el 'style.fontStyle'
    this.element.nativeElement.style.fontStyle = 'italic';
	}

  // 2. Llevar la directiva a ambos hermanos
  // ir a padre.component.html
}
