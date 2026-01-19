// import { Routes } from '@angular/router';
// import { LoginComponent } from './auth/login/login.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { PaymentListComponent } from './payment/list/payment-list/payment-list.component';
// import { PaymentFormComponent } from './payment/form/payment-form/payment-form.component';

// import { authGuard } from './core/auth.guard';

// export const routes: Routes = [
//   { path: '', redirectTo: 'login', pathMatch: 'full' },

//   { path: 'login', component: LoginComponent },

//   {
//     path: 'dashboard',
//     component: DashboardComponent,
//     canActivate: [authGuard]
//   },

//   {
//     path: 'payments',
//     component: PaymentListComponent,
//     canActivate: [authGuard]
//   },

//   {
//     path: 'payments/new',
//     component: PaymentFormComponent,
//     canActivate: [authGuard]
//   }
// ];

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PaymentListComponent } from './payment/list/payment-list/payment-list.component';
import { PaymentFormComponent } from './payment/form/payment-form/payment-form.component';
import { authGuard } from './core/auth.guard';

export const routes: Routes = [
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  // { path: 'login', component: LoginComponent },
{ path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard]
  },
  {
    path: 'payments',
    component: PaymentListComponent,
    canActivate: [authGuard]
  },
  {
    path: 'payments/new',
    component: PaymentFormComponent,
    canActivate: [authGuard]
  },
  {
    path: 'payments/edit/:id',
    component: PaymentFormComponent,
    canActivate: [authGuard]
  }
];
