import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-product-detail',
	templateUrl: './product-detail.component.html',
	styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit { //implementar OnInit

  //5. Creando una propiedad para el nombre del producto
  producto: string = '';

  // 5.1 Creando una propiedad para la categoría del producto
  color: string = '';

	// 6. Inyectando una ruta en el constructor  
	constructor(private _router: ActivatedRoute) {}

  //6.1 Asignando una ruta a la propiedad
	ngOnInit(): void {
		this._router.params.subscribe((params) => {
			this.producto=params['productId'];
      this.color=params['category'];
		});
	}

  // 6.1 ir a product-detail.component.html a pintar el detalle de un proyecto

}
