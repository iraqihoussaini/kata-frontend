import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KataComponent } from './kata.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', component: KataComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KataRoutingModule {}