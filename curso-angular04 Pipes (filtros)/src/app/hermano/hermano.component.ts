import { Component, OnInit, inject } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-hermano',
  templateUrl: './hermano.component.html',
  styleUrls: ['./hermano.component.css']
})
export class HermanoComponent implements OnInit {

  // Inyectando el servicio al 'hermano' con un constructor
  // constructor(
  //   private _servicioFamiliar: ServicioFamiliarService //importar ServicioFamiliarService
	// ){}

  // Creando el método ngOnInit para inicializar el servicio
	//hacer el implements e import el OnInit
  
  nombre?: string;

  //  -----------------------------------------------------
  // 16.1 Inyecyando, pero con 'inject' 
  //(reemplazamos todos los _servicioFamiliar por el 2do y comentamos el constructor)
  private _servicioFamiliar2 = inject(ServicioFamiliarService); //importar inject

  //------------------------------------------------------- 

	ngOnInit(): void {
		this._servicioFamiliar2.setHermanoPequeno('Pedro');
		this.nombre = this._servicioFamiliar2.getHermanoPequeno();
	}

  // Creando la conexión entre el padre y el hermano
  // ir a padre.component.html

  // ------------------------------------------------------
  // Creando un método 'saludar' para saludar al hermano grande utilizando el método del servicio
  saludar(){
		this._servicioFamiliar2.saludar(this._servicioFamiliar2.getHermanoGrande() || '');
	}

  // Ir a hermano.component.html a crear el botón para saludar
  
  // ----------------------------------------------------------------
  // Creando un método 'preguntar' para preguntar al hermano pequeno utilizando el método del servicio
  preguntar(){
		console.log(this._servicioFamiliar2.preguntarPorHijo());
	}

  // ir a hermano.component.html a crear el botón para preguntar

}
