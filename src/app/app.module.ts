import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsModule } from './charts/charts.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { EChartsOption } from 'echarts';
import { MapComponent } from './map/map.component';
@NgModule({
  declarations: [
    AppComponent,
    MapComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
