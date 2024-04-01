import { Injectable } from '@angular/core';
import { ECharts } from 'echarts';
@Injectable({
  providedIn: 'root'
})
export class EchartsServiceService {
  private chart!: echarts.ECharts
  private option!: echarts.EChartsOption;
  constructor() { }

  setChartInstance(chart: echarts.ECharts) {
    this.chart = chart;
  }

  setOption(option: echarts.EChartsOption) {
    if (this.chart) {
      this.chart.setOption(option);
    } else {
      this.option = option;
    }
  }

  getOption() {
    return this.option;
  }
}
