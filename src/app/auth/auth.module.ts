import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,

  ]
})

export class AuthModule { }

