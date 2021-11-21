import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
// import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';

function getRandomInt() {
  return Math.floor(Math.random() * 50);
}

@Component({
  selector: 'app-graphic-national',
  templateUrl: './graphic-national.component.html',
  styleUrls: ['./graphic-national.component.css']
})
export class GraphicNationalComponent implements OnInit {

  // Pie
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  // public pieChartLabels: Label[] = [['Количество школьников'], ['Количество студентов'], 'Количество любей'];
  // public pieChartData: SingleDataSet = [getRandomInt(), getRandomInt(), getRandomInt()];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  // constructor() {
  //   monkeyPatchChartJsTooltip();
  //   monkeyPatchChartJsLegend();
  // }

  ngOnInit(): void {
  }

}
