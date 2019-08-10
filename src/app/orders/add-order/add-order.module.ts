import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddOrderRoutingModule } from './add-order-routing.module';
import { AddPageComponent } from './add-page/add-page.component';

@NgModule({
  imports: [
    CommonModule,
    AddOrderRoutingModule
  ],
  declarations: [AddPageComponent]
})
export class AddOrderModule { }
