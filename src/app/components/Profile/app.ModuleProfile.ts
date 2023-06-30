import { NgModule } from '@angular/core';
import { ProfileComponent } from './Profile.component';
import { RegistrComponent } from './Registr/Registr.component';
import { LoginComponent } from './Login/Login.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms'
@NgModule({
    declarations: 
    [
        ProfileComponent,
        RegistrComponent,
        LoginComponent
    ],
    providers: [],
    imports: [
     
        BrowserModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule
      ],
    exports: []
})
export class ProfileModule {}