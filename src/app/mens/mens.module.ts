import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MensRoutingModule } from './mens-routing.module';
import { TopsComponent } from './tops/tops.component';


@NgModule({
  declarations: [
    TopsComponent

  ],
  imports: [
    CommonModule,
    MensRoutingModule,
  ]
})
export class MensModule { }
