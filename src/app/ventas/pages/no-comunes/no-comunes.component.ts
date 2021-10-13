import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  // i18nSelect
  nombre: string = 'Gustavo';
  genero: string = "femenino";

  invitacion = {
    'masculino':'invitarlo',
    'femenino': ' invitarla'
  }
  // i18nPlural

  clientes: string[]=['Maria','Pedro','Evelyn','Gustavo','Joaquin','Franco'];
  clientesMapa = {
    '=0': 'No tenemos clientes en espera',
    '=1': 'Tenemos un cliente en espera',
    'other': 'Tenemos # clientes en espera'
   }

  cambiarPersona(){
    this.nombre = 'Evelyn';
    this.genero = 'femenino'
  }

  eliminarPersona(){
    this.clientes.pop();
  }

  // keyvalue pipe

  persona = {
    nombre: 'Fernando',
    edad: 35,
    direccion: 'Broklyn , New York'
  }

  constructor() { }

  ngOnInit (): void {
  }

}
