import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './http/api.service';


// 
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    ApiService
  ]
})
export class CoreModule { }
