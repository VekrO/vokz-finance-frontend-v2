import { Routes } from '@angular/router';
import { authenticatedGuard } from './guards/authenticated.guard';

export const routes: Routes = [
    {
        path: 'register', loadComponent: () => import('./components/authentication/register/register.component').then(c => c.RegisterComponent)
    },
    {
        path: 'login', loadComponent: () => import('./components/authentication/login/login.component').then(c => c.LoginComponent)
    },
    {
        path: 'forgotPassword', loadComponent: () => import('./components/authentication/forgot-password/forgot-password.component').then(c => c.ForgotPasswordComponent)
    },
    {
        path: 'resetPassword', loadComponent: () => import('./components/authentication/reset-password/reset-password.component').then(c => c.ResetPasswordComponent)
    },
    {
        path: 'dashboard', loadComponent: () => import('./components/dashboard/dashboard.component').then(c => c.DashboardComponent), canActivate: [authenticatedGuard]
    },
    {
        path: 'conta', loadComponent: () => import('./components/conta/conta.component').then(c => c.ContaComponent), canActivate: [authenticatedGuard]
    },
    {
        path: '**', redirectTo: 'login'
    }
];
