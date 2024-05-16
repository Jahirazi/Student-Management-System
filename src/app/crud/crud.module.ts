import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudRoutingModule } from './crud-routing.module';
import { FormsModule, NgModel } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CrudRoutingModule,
    FormsModule,
  
  ]
})
export class CrudModule { }
