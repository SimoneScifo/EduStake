import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPopupComponent } from './login-popup/login-popup.component';

export const routes: Routes = [
  { path: '', component: LoginPopupComponent },
  { path: 'homepage', component: HomePageComponent }
];
