import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { UiComponent } from './ui/ui.component';

const routes: Routes = [
{
  path:'lineChart',
  component:LineChartComponent
},
{
  path:'pieChart',
  component:PieChartComponent
},

{
  path:'barChart',
  component:BarChartComponent
},

{
  path:'ui',
  component:UiComponent
}



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartsRoutingModule { }
