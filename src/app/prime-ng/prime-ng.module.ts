import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// primeng
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {MenubarModule} from 'primeng/menubar';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    CardModule
  ],
  exports:[
    ButtonModule,
    CardModule,
    MenubarModule
  ]
})
export class PrimeNgModule { }
