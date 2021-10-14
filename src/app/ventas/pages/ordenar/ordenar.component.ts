import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  nosotros: string = " nosotros";  
  enMayusculas : boolean = true;
  constructor( ) { }

  ngOnInit(): void {
  }
  cambioMayusculas(){
    this.enMayusculas = !this.enMayusculas;
  }

}
