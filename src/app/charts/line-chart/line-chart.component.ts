// import {
//   AfterViewInit,
//   Component,
//   ElementRef,
//   Input,
//   OnChanges,
//   OnInit,
//   Output,
//   SimpleChanges,
//   ViewChild,
// } from '@angular/core';
// import * as echarts from 'echarts';
// import { EChartsType, EChartsOption } from 'echarts';
// @Component({
//   selector: 'app-line-chart',
//   templateUrl: './line-chart.component.html',
//   styleUrls: ['./line-chart.component.css'],
// })
// export class LineChartComponent implements OnInit, OnChanges {
//   @Input() chartType: any;
//   @Input() data!: any[]
//   @Input() value: any;
//   @Input() title: any;
//   @Input() chartOptions!: EChartsOption;

//   @ViewChild('chart', { static: true }) chartElement!: ElementRef;
//   constructor() {}

//   chartId: string = `chart-${Math.random().toString(36).substring(2, 15)}`;

//   ngOnInit(): void {
//     this.initChart();

//   }

//   ngOnChanges(changes: SimpleChanges): void {
//     if (changes['chartOptions'] || changes['option']) {
//       this.initChart();
//     }
//   }
//   //انا حالياً محتاج اعمل اوبشنز ثابتة اول ما اخد الكومبوننت واضيفه يروح ضايف شارت بشكل الفلاني مثلاً وناقصه الداتا
// //افكر ازاي هتعامل مع وجود اكتر من نوع مختلف بحيث اعمل اقل تعديل في الإعدادات

//   initChart(): void {
//     const chartDom = this.chartElement.nativeElement;
//     const myChart = echarts.init(chartDom);
//    const option = {
//       xAxis: {
//         type: 'category',
//         boundaryGap: false,
//         data: this.data
//       },
//       yAxis: {
//         type: 'value'
//       },
//       series: [
//         {
//           data: this.value,
//           type: this.chartType,
//         }
//       ]
//     };
//    //شوف لو في بديل للفانكشن
//   //  const finalOption = this.chartOptions && option;
//   const finalOption = {
//     ...option,
//     ...this.chartOptions
//   };

//   myChart.setOption(finalOption);
//  //هنا هتلاقي المشكلة فين سببها بإذن الله
//   }

// }

// import {
//   Component,
//   ElementRef,
//   Input,
//   OnChanges,
//   OnInit,
//   SimpleChanges,
//   ViewChild,
// } from '@angular/core';
// import * as echarts from 'echarts';
// import { EChartsOption } from 'echarts';

// @Component({
//   selector: 'app-line-chart',
//   templateUrl: './line-chart.component.html',
//   styleUrls: ['./line-chart.component.css'],
// })
// export class LineChartComponent implements OnInit, OnChanges {
 
//   @Input() chartType: any;
//   @Input() data!: any[];
//   @Input() value: any;
//   @Input() title: any;
//   @Input() chartOptions!: EChartsOption;


//   lineOptions: EChartsOption = {
//     xAxis: {
//       type: 'category',
//       data: this.data
//     },
//     yAxis: {
//       type: 'value'
//     },
//     series: [
//       {
//         data: this.value,
//         type: 'line'
//       }
//     ]
//   }

  
//   @ViewChild('chart', { static: true }) chartElement!: ElementRef;


  
//   constructor() {

    
//   }

//   chartId: string = `chart-${Math.random().toString(36).substring(2, 15)}`;

//   ngOnInit(): void {
//     this.initChart();

    
//   }

//   ngOnChanges(changes: SimpleChanges): void {
//     if (
//       changes['data'] ||
//       changes['chartType']
//     ) {
//       this.initChart();
//     }
//   }

//   initChart(): void {
//     const chartDom = this.chartElement.nativeElement;
//     const myChart = echarts.init(chartDom);


    
    
//   }
// }
import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import * as echarts from 'echarts';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css'],
})
export class LineChartComponent implements OnInit, OnChanges {


  @Input() chartOptions!: EChartsOption;

  @ViewChild('chart', { static: true }) chartElement!: ElementRef;

  constructor() { }


  ngOnInit(): void {
    this.initChart();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // if (
    //   changes['data'] ||
    //   changes['options']
    // ) {
    //   this.initChart();
    // }
  }

  initChart(): void {
    const chartDom = this.chartElement.nativeElement;
    const myChart = echarts.init(chartDom);

    myChart.setOption(this.chartOptions);
  }


}
