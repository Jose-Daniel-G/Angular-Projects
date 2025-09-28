import { Routes } from '@angular/router';

export const routes: Routes = [
    {
      path: 'iniciar-sesion',
      loadComponent: () =>
        import('./auth/login/login.component').then((m) => m.LoginComponent),
    },
    {
      path: 'inicio',
      loadComponent: () =>
        import('./shared/layout/layout.component').then((m) => m.default),
      children: [
        { path: 'dashboard', loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent) },
        { path: 'profile', loadComponent: () => import('./pages/profile/profile.component').then(m => m.ProfileComponent) },
        { path: 'tables', loadComponent: () => import('./pages/tables/tables.component').then(m => m.TablesComponent) },
        { path: 'catalogo', loadComponent: () => import('./components/catalogo/catalogo-inicio/catalogo-inicio.component').then(m => m.CatalogoInicioComponent) },
        { path: 'carrito', loadComponent: () => import('./components/carrito/carrito-listado/carrito-listado.component').then(m => m.CarritoListadoComponent) },
        { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
      ]
    },
    { path: '', redirectTo: 'iniciar-sesion', pathMatch: 'full' },
    { path: '**', redirectTo: 'iniciar-sesion' }
  ];
  
