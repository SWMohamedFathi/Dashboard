import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NotFoundError } from 'rxjs';

const routes: Routes = [

  {
    path: 'charts',
    loadChildren: () => import('./charts/charts.module').then(c => c.ChartsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
