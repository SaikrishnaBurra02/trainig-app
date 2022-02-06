import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { FilterComponent } from './filter/filter.component';
import { ResultComponent } from './result/result.component';


@NgModule({
  declarations: [
    StudentComponent,
    FilterComponent,
    ResultComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
