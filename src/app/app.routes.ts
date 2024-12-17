import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'client', pathMatch: 'full' },
//   { path: 'admin', children: AdminRoutes },
    { path: 'client', loadChildren: () => import('./features/client/client.module').then(m => m.ClientModule) },
//   { path: '**', redirectTo: 'client' },
];
