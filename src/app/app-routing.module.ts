import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { AdvertisingPajeComponent } from './components/advertising-paje/advertising-paje.component';
import { ProfileComponent } from './components/Profile/Profile.component';
import { RegistrComponent } from './components/Profile/Registr/Registr.component';
import { LoginComponent } from './components/Profile/Login/Login.component';
import { AdminMenuComponent } from './components/AdminMenu/AdminMenu/AdminMenu.component';
import { AuthGuard } from './Guards/auth.guard';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'Advertising', component: AdvertisingPajeComponent },
  {
    path: 'Profile',
    component: ProfileComponent,

    children: [
      {
        path: 'reg',
        component: RegistrComponent,
      },
      {
        path: '',
        component: LoginComponent,
      },
    ],
  },
  { path: 'admin', component: AdminMenuComponent, canActivate: [AuthGuard] },
  {
    path: '**',

    component: MainComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
