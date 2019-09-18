import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule,ReactiveFormsModule , FormGroup } from '@angular/forms';
import { AppModule } from '../app.module';

@NgModule({
  declarations: [AuthComponent,],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
  ],
  exports:[
    AuthComponent,
    CommonModule
  ]
})
export class AuthModule { }
