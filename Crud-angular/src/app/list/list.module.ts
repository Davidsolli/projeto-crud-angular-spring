import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    ListComponent,
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    MatTableModule
  ]
})
export class ListModule { }
