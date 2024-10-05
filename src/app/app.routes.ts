import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'reactive',
    loadChildren: () => import('./reactive/reactive.routes').then( m => m.routes )
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes').then( m => m.routes )
  },
  {
    path: '**',
    redirectTo: 'reactive'
  }
];
