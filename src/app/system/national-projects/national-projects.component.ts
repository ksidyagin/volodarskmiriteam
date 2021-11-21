import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import { Color, SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';

@Component({
  selector: 'app-national-projects',
  templateUrl: './national-projects.component.html',
  styleUrls: ['./national-projects.component.css']
})
export class NationalProjectsComponent implements OnInit {
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [['Довольны качеством жизни'], ['Сомневаются'], 'Не довольны'];
  public pieChartData: SingleDataSet = [78, 18, 14];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];


  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: '2020 год' },
    { data: [10, 80, 80, 96, 65, 44, 50], label: '2021 год' },
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: (ChartOptions & { annotation ?: any }) = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'blue',
      backgroundColor: 'rgba(64,224,208,0.3)',
    },
    {
      borderColor: 'green',
      backgroundColor: 'rgba(0,255,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];



  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }
  ngOnInit(): void {
  }

}
