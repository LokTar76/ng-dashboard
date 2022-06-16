import { Component, OnInit,ViewChild  } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  constructor() { }

  // Pie
  public pieChartData = {
    labels: ['XYZ Logistics', 'Main St Bakery', 'Catch Big Tackle'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [20, 150, 500],
        backgroundColor: [
          'rgb(255,99,132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        borderColor: '#111',
        hoverOffset: 4
      }
    ]
  };
  public pieChartType: ChartType = 'doughnut';
  public colors: any[] = [
    {
      backgroundColor: ['#26547c', '#ff6b6b', '#ffd166'],
      borderColor: '#111'
    }
  ];
  public pieChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  ngOnInit(): void {
  }

}
