
import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrComponent } from './Registr/Registr.component';
import { LoginComponent } from './Login/Login.component';
const routes: Routes = [
  
   
  ];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModuleProfile { }