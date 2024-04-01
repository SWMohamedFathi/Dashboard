import { Component, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import * as echarts from 'echarts';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
 



  // chartType!:string ;
  constructor() { }

  ngOnInit(): void {
    // if(this.chartType=='pie'){
    //   this.data = ['Mjhgon', 'Tuhgjhge', 'Wehghgd', 'hg', 'hg', 'hg', 'hg'];
    //   this.value = [453, 932, 901, 934, 1290, 1330, 1320];
    // }
   }




}