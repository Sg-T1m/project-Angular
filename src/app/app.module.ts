import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NavigationLeftComponent } from './components/navigationLeft/navigationLeft.component';
import { MainPageModule } from './components/main/app-moduleMein';
import { AdvertisingPajeComponent } from './components/advertising-paje/advertising-paje.component';
import { GlobalErrorComponent } from './components/global-Error/global-Error.component';
import { ProfileModule } from './components/Profile/app.ModuleProfile';
import { AdminMenuComponent } from './components/AdminMenu/AdminMenu/AdminMenu.component';
import { AuthGuard } from './Guards/auth.guard';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NavigationLeftComponent,
    AdvertisingPajeComponent,
    GlobalErrorComponent,
    AdminMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainPageModule,
    ProfileModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
