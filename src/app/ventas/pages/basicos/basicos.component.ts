import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  nombreLower : string ='gustavo';
  nombreUpper : string ='GUSTAVO';
  nombreCompleto : string ='GuSTaVo DiAz';

  constructor() { }

  ngOnInit(): void {
  }


}
