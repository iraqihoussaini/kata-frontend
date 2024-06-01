import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from './routes';

export const routes: Routes = [
  {
    path: AppRoutes.kata.stringPath,
    loadChildren: () => import('./kata/kata.module').then((m) => m.KataModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: AppRoutes.kata.stringPath,
  },
  {
    path: '**',
    redirectTo: AppRoutes.kata.stringPath,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
