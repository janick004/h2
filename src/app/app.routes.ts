import { Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { CartComponent } from './Pages/cart/cart.component';
import { LandingPageComponent } from './Pages/landing-page/landing-page.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'cart', component: CartComponent },
  { path: '', component: LandingPageComponent }, // Default route
];