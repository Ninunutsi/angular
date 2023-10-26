import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from './user-form/user-form.component';
import { ProductFormComponent } from './product-form/product-form.component';



@NgModule({
  declarations: [
    UserFormComponent,
    ProductFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FormsModule { }
