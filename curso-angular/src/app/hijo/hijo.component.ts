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
  
  // 10.6 Emitiendo el mensaje
  mensaje: string = '';
  //
  enviarMensaje(){
    this.mensajeDesdeHijo.emit(this.mensaje);
  }

  // 10.7 ir a hijo.component.html

}
