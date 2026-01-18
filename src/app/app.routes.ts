import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { PaymentComponent } from './payment/payment.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'payments', component: PaymentComponent }
];
