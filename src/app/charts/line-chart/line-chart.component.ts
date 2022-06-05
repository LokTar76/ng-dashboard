import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';

import { LINE_CHART_COLORS } from 'src/app/shared/chart.colors';

const LINE_CHART_SAMPLE_DATA: any[] = [
  {
    data: [32, 14, 46, 23, 38, 56],
    label: 'Sentiment Analysis',
    backgroundColor: 'rgba(6,214,160,0.2)',
    borderColor: 'rgba(0, 200, 140, 0.5)',
    pointBackgroundColor: '##9afb00',
    pointBorderColor: '#000',
    pointHoverBackgroundColor: '#555',
    pointHoverBorderColor: '#555',
    fill: 'origin',
  },
  {
    data: [22, 19, 44, 23, 90, 78],
    label: 'Image Recognition',
    backgroundColor: 'rgba(255,209,102,0.2)',
    borderColor: 'rgba(240, 180, 89, 0.5)',
    pointBackgroundColor: '##9afb00',
    pointBorderColor: '#000',
    pointHoverBackgroundColor: '#555',
    pointHoverBorderColor: '#555',
    fill: 'origin',
  },
  {
    data: [19, 22, 54, 87, 61, 50],
    label: 'Forecasting',
    backgroundColor: 'rgba(15,78,133,0.2)',
    borderColor: 'rgba(3, 64, 128, 0.5)',
    pointBackgroundColor: '##9afb00',
    pointBorderColor: '#000',
    pointHoverBackgroundColor: '#555',
    pointHoverBorderColor: '#555',
    fill: 'origin',
  },
];

const LINE_CHART_LABELS: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css'],
})
export class LineChartComponent implements OnInit {
  constructor() {}

  public lineChartData: any[] = LINE_CHART_SAMPLE_DATA;
  public lineChartLabels: string[] = LINE_CHART_LABELS;
  public lineChartType: ChartType = 'line';
  public lineChartLegend = true;
  public lineChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    elements: {
      line: {
        tension: 0.5
      }
    },
  };
  public lineChartColors = LINE_CHART_COLORS;

  ngOnInit(): void {}
}
